import { inspect } from "util";

export default {
    Query: {
      posts: async (parent, args, { Post }) => {
        const posts = await Post.find();
         return posts
      },
    },
    Mutation: {
      upvotePost: async (parent, args, { Post }) => {
        const post = await Post.findOneAndUpdate({ title: args.title }, {update: {$inc: { votes: 1 }}});
        post._id = post._id.toString();
        return post
     },
      addPost: async (parent, args, { Post }) => {
        const post = await new Post({
            title: args.title,
            author: args.author,
            votes: parseInt(args.votes)
        }).save();
        post._id = post._id.toString();
        return post
     }
    }
  };
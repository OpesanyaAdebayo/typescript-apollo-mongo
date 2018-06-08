export default {
    Query: {
      posts: async (parent, args, { Post }) => {
        const posts = await Post.find();
         return posts
      },
    },
    Mutation: {
      upvotePost: async (parent, args, { Post }) => {
        const post = await Post.findOneAndUpdate({ title: args.title }, {$inc:{ votes: 1 }}, {new: true} );
        post._id = post._id.toString();
        return post
     },
      addPost: async (parent, args, { Post }) => {
        const post = await new Post(args).save();
        post._id = post._id.toString();
        return post
     }
    }
  };
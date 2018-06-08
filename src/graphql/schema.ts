export default `

  type Post {
    id: String!
    title: String
    author: String
    votes: Int
  }

  # the schema allows the following query:
  type Query {
    posts: [Post]
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      title: String!
    ): Post
    addPost (
      title: String!
      author: String!
      votes: Int!
    ): Post
  }
`;
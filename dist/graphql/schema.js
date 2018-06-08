"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "\n  type Post {\n    id: String!\n    title: String\n    author: String\n    votes: Int!\n  }\n\n  # the schema allows the following query:\n  type Query {\n    posts: [Post]\n  }\n\n  # this schema allows the following mutation:\n  type Mutation {\n    upvotePost (\n      title: String\n    ): Post\n    addPost (\n      title: String!\n      author: String!\n      votes: Int!\n    ): Post\n  }\n";
//# sourceMappingURL=schema.js.map
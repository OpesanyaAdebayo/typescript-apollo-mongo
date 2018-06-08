// -----------------------------------------------------------------
// Imports library
// -----------------------------------------------------------------
import * as express from 'express'
import * as bodyParser from 'body-parser';
import * as path from 'path';

//-----------------------------------------------------------------
// MongoDB Stuff
import * as mongoose from 'mongoose';
mongoose.connect('mongodb://graphqltest:graphqltest1@ds153460.mlab.com:53460/graphqltest')
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(err));

const Post = mongoose.model('Post', {title: String, author: String, votes: String});
//-----------------------------------------------------------------

//-----------------------------------------------------------------
// GraphQL Stuff
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
//------------------------------------------------------------------

// -----------------------------------------------------------------
// Import router
// -----------------------------------------------------------------
import { default as index } from "./router/index";

// -----------------------------------------------------------------
// Attributes
// -----------------------------------------------------------------
const app: express.Express = express();

// -----------------------------------------------------------------
// Use express
// -----------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(index)

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { Post } }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

export default app
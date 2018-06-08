"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -----------------------------------------------------------------
// Imports library
// -----------------------------------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//import * as mongoose from 'mongoose';
//-----------------------------------------------------------------
// GraphQL Stuff
var apollo_server_express_1 = require("apollo-server-express");
var graphql_tools_1 = require("graphql-tools");
var schema_1 = require("./graphql/schema");
var resolvers_1 = require("./graphql/resolvers");
var schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
});
//------------------------------------------------------------------
// -----------------------------------------------------------------
// Import router
// -----------------------------------------------------------------
var index_1 = require("./router/index");
// -----------------------------------------------------------------
// Attributes
// -----------------------------------------------------------------
var app = express();
// -----------------------------------------------------------------
// Use express
// -----------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(index_1.default);
app.use('/graphql', bodyParser.json(), apollo_server_express_1.graphqlExpress({ schema: schema }));
app.get('/graphiql', apollo_server_express_1.graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled
exports.default = app;
//# sourceMappingURL=app.js.map
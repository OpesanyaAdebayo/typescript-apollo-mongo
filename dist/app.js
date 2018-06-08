"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -----------------------------------------------------------------
// Imports library
// -----------------------------------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
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
exports.default = app;
//# sourceMappingURL=app.js.map
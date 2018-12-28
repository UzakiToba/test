"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// promiseのrejectがどこでにもキャッチされなかった場合ここでキャッチして追跡する
process.on('unhandledRejection', console.dir);
var express = require("express");
exports.express = express;
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var app = express();
exports.app = app;
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(logger('dev')); // ログ表示
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// ソース類があるフォルダ
app.use(express.static(path.join(__dirname, '../client/dist')));
//# sourceMappingURL=common.js.map
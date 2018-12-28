// promiseのrejectがどこでにもキャッチされなかった場合ここでキャッチして追跡する
process.on('unhandledRejection', console.dir);

import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';

const app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev')); // ログ表示
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ソース類があるフォルダ
app.use(express.static(path.join(__dirname, '../client/dist')));

export { express, app };

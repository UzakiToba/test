"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createError = require("http-errors");
var common_1 = require("./common");
// app.use('/', routes.index);
// 404の時
common_1.app.use(function (req, res, next) {
    next(createError(404));
});
common_1.app.use(function (err, req, res, next) {
    res.locals = {
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {},
        title: err.status || 500
    };
    res.status(err.status || 500);
    res.render('error');
});
exports.default = common_1.app;
//# sourceMappingURL=app.js.map
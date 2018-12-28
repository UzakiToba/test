"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var router = common_1.express.Router();
router.get('/', function (req, res, next) {
    console.log('hoge');
    res.render('index', { title: 'Express' });
});
module.exports = router;
//# sourceMappingURL=index.js.map
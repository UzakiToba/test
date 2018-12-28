import { express } from '../common';
import * as fs from 'fs';

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('hoge');
  res.render('index', { title: 'Express' });
});

module.exports = router;

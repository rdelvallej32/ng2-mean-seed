import { Router } from 'express';
const router = new Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

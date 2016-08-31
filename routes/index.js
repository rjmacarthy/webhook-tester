var express = require('express');
var fs = require('fs');
var uuid = require('node-uuid');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/webhook', function (req, res, next) {
  fs.writeFile(path.join(__dirname, `../public/webhook-${uuid.v1()}.json`), JSON.stringify(req.body), function (err) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ success: true });
    }
  });
});



module.exports = router;

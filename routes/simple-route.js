var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


router.get('/',function(req,res){
  res.send('Simple route home page')
});

router.get('/about',function(req,res){
  res.send('Simple route template')
});


module.exports = router

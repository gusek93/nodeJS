const express = require('express');
const router = express.Router();
const {odd, even} = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log( checkNumber(10));
console.log( checkStringOddOrEven('hello'))



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

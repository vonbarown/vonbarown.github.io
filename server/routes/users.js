var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


const postContact = (req, res, next) => {

  try {
    res.send({
      name: req.body.name,
      email: req.body.email,
      subject: 'Contact from portfolio website',
      message: req.body.message
    })

  } catch (error) {
    console.log(error);

  }

}

router.post('/send', postContact)

module.exports = router;

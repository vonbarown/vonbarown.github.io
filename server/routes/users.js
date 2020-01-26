const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer')
const { USER, PASS } = require('../config')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

const transport = {
  host: `smtp.ethereal.email`,
  port: 587,
  auth: {
    user: USER,
    pass: PASS
  }
}

let transporter = nodeMailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

const postContact = (req, res, next) => {
  console.log(req.body);
  // try {
  //   res.send({
  //     name: req.body.name,
  //     email: req.body.email,
  //     subject: 'Contact from portfolio website',
  //     message: req.body.message
  //   })

  let mail = {
    from: req.body.name,
    to: 'bvoniel@gmail.com',
    subject: 'New Message from Portfolio Website',
    text: `name: ${req.body.name} \n email: ${req.body.email} \n message: ${req.body.message} `
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })

}

router.post('/send', postContact)

module.exports = router;

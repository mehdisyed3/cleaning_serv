import path from 'path';
import fs from 'fs';
import React from 'react';
import App from '../src/App'
import ReactDOMServer from 'react-dom/server'
const bodyParser = require('body-parser')

const express = require('express')
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />)

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.post('/contact', async (req, res) => {
  const nodemailer = require('nodemailer')
  const {
    body
  } = req
  console.log(req.body)

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  try {
    const { exec } = require("child_process");

    const {
      name,
      email,
      phone,
      msg
    } = body

    // let transporter = nodemailer.createTransport({
    //   host: "mail.ampmremediation.com",
    //   port: 2525,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: "zain@ampmremediation.com", // generated ethereal user
    //     pass: 'Uppy!23', // generated ethereal password
    //   },
    // });

    // send mail with defined transport object
    // let info = await transporter.sendMail({
    //   from: '"Zain AMPM" <zain@ampmremediation.com>', // sender address
    //   to: "zeddotes@gmail.com", // list of receivers
    //   subject: "Hello ", // Subject line
    //   text: "Hello world?", // plain text body
    //   html: "<b>Herrrrrrrrefello world?</b>", // html body
    // });

    const emailBodyArr = [
      '<html><body>',
      `Nassme: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `\n`,
      unescape(msg),
      '</body></html>'
    ];
    const rec = "zain@ampmremediation.com"

    exec([
      `echo "${emailBodyArr.join("\n")}" | mail -s "Inquiry" -S replyto="${name}<${email}>" ${rec}`
    ].join(" "), (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        // throw error
        return res.status(500).json({
          msg: error.message
        })
      }
      if (stderr) {
        // throw stderr
        console.log(`stderr: ${stderr.message}`);
        return res.status(500).json({
          msg: stderr.message
        })
      }
      return res.status(200).json(body)
      console.log(`stdout: ${stdout}`);
    })

    console.log(stdout);

    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    
  } catch (e) {
    console.error(e)
    throw e
    return res.status(500).json({})
  }
})

app.use(express.static('./build'));

app.listen(0, () => {
  console.log(`Secccccccccccg on port ${PORT}`);
});
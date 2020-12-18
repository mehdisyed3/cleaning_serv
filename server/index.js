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
  const {
    body
  } = req

  try {
    const { exec } = require("child_process");

    const {
      name,
      email,
      phone,
      msg
    } = body

    const emailBodyArr = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone ? phone : 'N/A'}`,
      `\n`,
      unescape(msg)
    ];
    const rec = "phil@ampmremediation.com"

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
        console.error(`stderr: ${stderr.message}`);
        return res.status(500).json({
          msg: `Couldn't send out message. [MAIL]`
        })
      }
      return res.status(200).json(body)
    })
    
  } catch (e) {
    console.error(e)
    return res.status(500).json({
      msg: `Couldn't send out message. [CATCH]`
    })
  }
})

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server on: ${PORT}`);
});
const express = require('express');
const os = require('os');
const moment = require('moment-timezone');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const hostname = os.hostname();
  const dateTime = moment().format('YYYY-MM-DD HH:mm:ss');

  const htmlContent = `
    <html>
      <head>
        <title>ManuLabs Cloud</title>
      </head>
      <body style="background-color: #EBEAEB; font-family: courier; font-size: 20px; padding: 20px; text-align: center; color: #333335;">
        <h1>Welcome to Manu labs</h1>
        <p style="text-style: bold;">Hostname: ${hostname}</p>
        <p>Date Time: ${dateTime}</p>
      </body>
    </html>
  `;

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

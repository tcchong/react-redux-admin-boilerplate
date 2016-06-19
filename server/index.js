var path = require('path');
var express = require('express');
var mountPath = require('../config/env.config').mountPath;

var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/*', function(req, res) {
  res.send(`<!DOCTYPE html>
      <html>
        <head>
          <title>React Admin Boilerplate</title>
          <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
          <link rel="shortcut icon" type="image/x-icon" href="${mountPath}favicon.ico" />
          <link rel="stylesheet" href="${mountPath}dist/css/bootstrap.min.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
          <link rel="stylesheet" href="${mountPath}dist/css/AdminLTE.min.css" />
          <link rel="stylesheet" href="${mountPath}dist/css/skin-blue.min.css" />
        </head>
      
        <body class="hold-transition skin-blue sidebar-mini login-page">
          <div id="app"></div>
          <script src="${mountPath}dist/js/jQuery-2.2.0.min.js"></script>
          <script src="${mountPath}dist/js/bootstrap.min.js"></script>
          <script src="${mountPath}dist/js/app.min.js"></script>
          <script src="${mountPath}dist/js/admin.bundle.js"></script>
        </body>
      </html>
    `);
});

app.listen(5656);

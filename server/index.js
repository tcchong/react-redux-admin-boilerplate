var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/*', function(req, res) {
  var mountPath = 'http://localhost:5656/';
  res.send(`<!DOCTYPE html>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="${mountPath}favicon.ico" />
        <base href="${mountPath}"/>
        <script>
          PARSE_DASHBOARD_PATH = "${mountPath}";
        </script>
      </head>
      <html>
        <title>Parse Dashboard</title>
        <body>
          <div id="browser_mount"></div>
          <script src="${mountPath}dist/admin.bundle.js"></script>
        </body>
      </html>
    `);
});

app.listen(5656);

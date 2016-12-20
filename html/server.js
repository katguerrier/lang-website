var fs = require('fs');

var express = require('express');
var Handlebars = require('handlebars');

var app = express();

var port = process.env.PORT || 80;

app.get('*', function(req, res) {
    console.log("GET request at " + req.path);
    fs.readFile('template.html', 'utf8', function(err, data) {
        console.log("reading file");
        if (err) throw err;
        var template = Handlebars.compile(data); 
        var html = template( {
            includes: '',
            navbar: '',
            page: req.path
       });
       res.send(html);
       console.log(html);
    });
})

app.listen(port, function(err) {
    if (err) throw err;
    console.log("node.js listening on port " + port);
})
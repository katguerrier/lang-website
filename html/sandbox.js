var fs = require('fs');

var express = require('express');
var Handlebars = require('handlebars');

var app = express();

var port = process.env.PORT || 80;

app.get('*', function(req, res) {
    console.log("GET request at " + req.path);
    
    var obj = {}
    
    function buildObj(parameter, value) {
        obj[parameter] = value;
        console.log(obj);
    }
    
    fs.readFile('template.html', 'utf8', function(err, data) {
        if (err) throw err;
        var template = Handlebars.compile(data); 
        
        function respond(callback) {
            fs.readFile('includes.html', 'utf8', function(err, data) {
                buildObj('includes', data);
                console.log(obj);
            });    
            
            fs.readFile('navbar.html', 'utf8', function(err, data) {
                buildObj('navbar', data);
            });
        }
        
        console.log(obj);
        respond(res.json(obj));
    });
})

app.listen(port, function(err) {
    if (err) throw err;
    console.log("node.js listening on port " + port);
})
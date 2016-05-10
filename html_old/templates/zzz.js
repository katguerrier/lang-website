var fs = require('fs')
var Handlebars = require('handlebars')

var template = fs.readFileSync('tmp.html', {encoding: 'utf8'});

var head = fs.readFileSync('head.html', {encoding: 'utf8'});
var nav = fs.readFileSync('nav.html', {encoding: 'utf8'});

Handlebars.registerPartial('head', head);
Handlebars.registerPartial('navbar', nav);

var snek = Handlebars.compile(template);

var html = snek();

fs.writeFile('output.html', html)
var fs = require('fs')
var Handlebars = require('handlebars')

////////////////////////////
function readDirectory(path) {
	var list = fs.readdirSync(path);

	list.forEach(function(item) {
		var check = fs.statSync(path + '/' + item)

		if (check.isFile() && (item.split('.')[1] === 'html')) {
			var contents = fs.readFileSync(path + '/' + item, {encoding: 'utf8'});
			var template = Handlebars.compile(contents);
			fs.writeFile('_static/' + path + '/' + item, template());
		}

		else if (check.isDirectory() && item[0] !== '_' && item[0] !== 'n')
		{
			readDirectory(path + '/' + item);
		}

	});
}

var filelist = fs.readdirSync('_tmpl/partials')
filelist.forEach(function(item) {
	var file = fs.readFileSync('_tmpl/partials/' + item, {encoding: 'utf8'}); // read the file
	Handlebars.registerPartial(item.split('.')[0], file); // register the partial from the file; first param is name, second param is data
});


readDirectory('./');

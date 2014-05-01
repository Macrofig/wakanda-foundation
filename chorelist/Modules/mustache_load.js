//copied from https://github.com/janl/mustache.js/blob/master/mustache.js
// modified for Mustache


var templateFolder = getFolder("path") + "templates/"; //uses project/templates as default
var templateExt = '.mustache';

exports.setTemplateFolder = function setTemplateFolder (relativePath) {
	//sets the path according to the project folder based on a relative path
	return getFolder("path") + relativePath;
};

exports.process = function(templateName, data){
	var template = File(templateFolder + templateName + templateExt).toString();
	var result = Mustache.render(template, data);
	return result;
};

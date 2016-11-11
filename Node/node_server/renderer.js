var fs = require("fs");

function view(templateName, values, response) {
  // read from the template files
var fileContents =  fs.readFileSync('./views/' + templateName + '.html');
    // Insert vlaues in to the conent

    // Write out to the response
    response.write(fileContents);
}


module.exports.view = view;

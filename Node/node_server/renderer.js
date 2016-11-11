var fs = require("fs");

function mergeValues(values, content) {
  // cycle over the keys
  for(var key in vlaues){
    // replace all key with the value from the values object
    content = content.replace('{{" + key + "}}', values[key]);
  }
    // return merged content
    return = content;
}

function view(templateName, values, response) {
  // read from the template files
var fileContents =  fs.readFileSync('./views/' + templateName + '.html',{encoding: "utf8"});
    // Insert vlaues in to the conent
    fileContents = mergeValues(values, fileContents);
    // Write out to the response
    response.write(fileContents);
}


module.exports.view = view;

var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");
var commonHeaders = {'Content-Type', 'text/html'};

// Handle the HTTP route  GET / and POST / i.e. Home
function home(request, response){
    // if url = "/" && GET
    if(request.url === "/"){
        // show search
        if(request.method.toLowerCase() === "get"){
          response.statusCode = 200;
          response.setHeader(commonHeaders);
          renderer.view("header", {}, response);
          renderer.view("search", {}, response);
          renderer.view("footer", {}, response);
          response.end();
      }
      else {
        // if url = "/" && POST

        // get the post data from body
        request.on('data', function(postBody) {
          // extract the username
          var query = querystring.parse(postBody.toString());
          response.write(query.username);
          response.end();
          // redirect to username
        });

      }
    }

}
// Handle the HTTP route GET /:username i.e. /chalkers
function user(request, response){
    // if url == "/...."
    var username = request.url.replace('/', '');
    if(username.length > 0){
        response.statusCode = 200;
        response.setHeader(commonHeaders);
        renderer.view('header', {}, response);
        response.end();
        //get json from Treehouse
        var studentProfile = new Profile(username);
        // on 'end'
        studentProfile.on("end", function(profileJSON){
          // show profile

          // store the values wich we need
          var values = {
            avatarUrl: profileJSON.gravatar_url,
            username: profileJSON.profile_name,
            badges: profileJSON.badges.length,
            jsPoints: profileJSON.points.JavaScript
          }
          // Simple response
          renderer.view('profile', values, response);
          renderer.view('footer', {}, response);
          response.end();
        });
        // on 'error'
        studentProfile.on("error", function(error) {
          // show error
          renderer.view('error', {errorMessage: error.message}, response);
          renderer.view("search", {}, response);
          renderer.view('footer', {}, response);
          response.end();
        });
    }
}


module.exports.home = home;
module.exports.user = user;

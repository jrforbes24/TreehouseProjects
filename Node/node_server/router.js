var Profile = require("./profile.js");
var renderer = require("./renderer.js");

// Handle the HTTP route  GET / and POST / i.e. Home
function home(request, response){
    // if url = "/" && GET
    if(request.url === "/"){
        // show search
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        renderer.view("header", {}, response);
        renderer.view("search", {}, response);
        renderer.view("footer", {}, response);
        response.end();
    }
    // if url = "/" && POST
        // redirect to username
}
// Handle the HTTP route GET /:username i.e. /chalkers
function user(request, response){
    // if url == "/...."
    var username = request.url.replace('/', '');
    if(username.length > 0){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
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

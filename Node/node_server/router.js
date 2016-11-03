var Profile = require("./profile.js");

// Handle the HTTP route  GET / and POST / i.e. Home
function home(request, response){
    // if url = "/" && GET
    if(request.url === "/"){
        // show search
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write("Header\n");
        response.write("Search\n");
        response.end("Footer\n");
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
        response.write("Header\n");
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
          response.write(values.username + ' has ' + value.badges + " badges.\n");
          response.end("Footer\n");
        });
        // on 'error'
        studentProfile.on("error", function(error) {
          // show error
          response.write(error.message + "\n");
          response.end("Footer\n");
        });
    }
}


module.exports.home = home;
module.exports.user = user;

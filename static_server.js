var connect = require('connect');
var serveStatic = require('serve-static');
args = process.argv.slice(2);
if (args.length == 0) {
    console.log("Usage node static_server.js (platform folder)")
    process.exit(0);
}

server = connect();
server.use(function(req, res, next) {
    console.log("[" + (new Date()).toLocaleTimeString() + "] " + req.url);
    next();
}); 

port = 8080;
folder = __dirname + args[0];
console.log("Serving static foler " + folder + " on port:" + port); 
server.use(serveStatic(folder)).listen(port);

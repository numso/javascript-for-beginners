/*jshint node:true */

var PORT = process.env.PORT || process.argv[2] || 3000,
    HOST = process.env.IP;

var express = require('express'),
    app = express();

express.listen(PORT, HOST);
console.log("Server running on " + HOST + ":" + PORT);

app.configure(function () {
    app.use(express.logger({format: ":method :status :url"}));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + "/public"));
    app.use(express.errorHandler({dumpExceptions:true, showStack:true}));
});

const http = require('http');

const originalCreateServer = http.createServer;

http.createServer = function() {
    console.log("http.createServer called with arguments:", arguments.length, typeof arguments[0]);
    return originalCreateServer.apply(this, arguments);
};

require('./dist-secured/devaegis.js');

setTimeout(() => {
    process.exit(0);
}, 2000);

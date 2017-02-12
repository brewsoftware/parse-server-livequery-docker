var express = require('express');
var ParseServer = require('parse-server').ParseServer;

var app = express();

var httpServer = require('http').createServer(app);
httpServer.listen(process.env.LIVEQUERY_PORT || 2337);
console.log(process.env.APP_ID);
ParseServer.createLiveQueryServer(httpServer, {
    appId: process.env.APP_ID ,
    masterKey: process.env.MASTER_KEY ,
    serverURL: process.env.SERVER_URL , // 'https://parse.buddy.com/parse',
    redisURL: process.env.REDIS_URL
});

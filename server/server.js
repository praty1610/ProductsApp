var express = require('express');
var webpack = require('webpack');
var mongoose = require('mongoose');
var path = require('path');
var app = new express();
var config = require('../webpack.config');

app.use(express.static(path.normalize(__dirname+ '/../dist')));

app.use(function(req, res) {
    var compose = webpack(config);
    compose.run(function(err, stat) {
        if(stat)
            res.sendFile(path.normalize(__dirname+'/../client/index.html'));
    })
});

mongoose.connect('mongodb://127.0.0.1:27017/products_app', function(err, connected) {
    if(connected) { 
        //console.log('connected')
    } else {
        throw error;
        
    }
});

mongoose.Promise = global.Promise;

app.listen(8000, function(err, response) {
    if(err)
        throw err;
    else
        console.log('Application is running at port 8000')
})
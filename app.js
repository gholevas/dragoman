var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var router = require('./routes');
var path = require('path');
var app = express();

var port = 3000;

// var sass = require('node-sass');
 
// console.log(sass.info);

//swig set up
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

//logging and body-parsing
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routing for static files

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));


//404 not found error
app.use(router);
//error handling
app.use(function(err,req,res,next){
	res.status(err.status || 500);
	//render some error html
})



app.listen(port,function(){
	console.log('server is now listening for requests on '+port);
})
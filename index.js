var express = require('express');
var app = express();

var properties = require('./properties');

var databaseModule = require('./app_modules/database/databaseModule');
var authModule = require('./app_modules/authentication/login');


app.get('/login',function(request,response){
	
	databaseModule.connectToDb(properties.mongoDBURL)
	.then(function(database){
			database.collection('login.users')
			.find({username : request.query.username,password : request.query.password})
			.toArray(function(err,result){
				if(authModule.validateUser(result,request.query)){
					/*set cookie and session starts*/
					response.status(200).json({'a':'successfully logged in'});
					response.end();
				}
				else{

					response.status(403).json({message:'User invalid'});
				}
			});
		},
		function(err){
			throw err;
		}
		);
});

app.listen(7000);
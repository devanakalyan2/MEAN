var exports =  module.exports = {};
var MongoClient = require('mongodb').MongoClient;
var Q = require('q');

exports.connectToDb = function(url){
	var defer = Q.defer();
	MongoClient.connect(url,function(err,database){
		if(err){
			defer.reject('error connecting to database');
			throw err;
		}
		defer.resolve(database);
	});
	return defer.promise;
};
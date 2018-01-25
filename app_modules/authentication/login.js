var exports = module.exports = {};

exports.validateUser = function(dbMatch,params){
	if(dbMatch.length === 1 && dbMatch[0].username === params.username && dbMatch[0].password === params.password){
		return true;
	}
	return false;
};
//routes
function queryToJSON( query ) {            
    var pairs = query.split('&');
    
    var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
}

function dashboard(req,res)
{
	var m = require('mustache_load.js');
	res.body = m.process('html',{"page_title":"Dashboard","content":"Nothing yet"});
	res.headers.CONTENT_TYPE = 'text/html';
	return;
}

function add_user(req, res)
{
	var m = require('mustache_load.js');
	res.body = m.process('html',{"page_title":"Add User","content":"Nothing yet"});
	res.headers.CONTENT_TYPE = 'text/html';
	return;
}

function users(req,res)
{
	var poop = req;
	var m = require('mustache_load.js');
	var users = ds.Users.query('ID > 0');
	if (users)
	{
	  users = users.toArray();
	}
	else
	{
	  users = {"Name":"No User Types!"};
	}
	var add_user = m.process('users/get',{"users":users});
	res.body = m.process('html',{"page_title":"Add User","content":add_user});
	res.headers.CONTENT_TYPE = 'text/html';
	return;
}

function add_user_type(req,res)
{
	var params = queryToJSON(req.body.toString());
	if (params.user_type_name)
	{
		var new_usertype = new ds.UserTypes({     //create a new company
	        Name : params.user_type_name
	    });
	    new_usertype.save();
		res.body = '{success:1}';
	}
	else
	{
		res.body = '{success:0}';
		
	}
	
	res.headers.CONTENT_TYPE = 'text/json';
	return;
}


function user_types(req, res)
{
	var user_types = ds.UserTypes.query('ID > 0');
	if (user_types)
	{
	  user_types = user_types.toArray();
	}
	else
	{
	  user_types = {"Name":"No User Types!"};
	}
	var m = require('mustache_load.js');
	var add_user = m.process('user_types/get',{"usertypes":user_types});
	res.body = m.process('html',{"page_title":"User Types","content":add_user});
	res.headers.CONTENT_TYPE = 'text/html';
	
	return;
}

function delete_user_type(req, res)
{
	var params, response, rec;
	params = queryToJSON(req.body.toString());
	if (params.hasOwnProperty("ID"))
	{
		rec = ds.UserTypes.query('ID = :1', params.ID);
		if (rec)
		{
			rec.remove();
			response = '{success:1,msg:"Record deleted."}';
			
		}
		else
		{
			//invalid record ID
			response ='{success:0,msg:"Invalid record ID."}';
			
		}
	}
	else
	{
		//invalid params
		response = '{success:0,msg:"Invalid parameters."}';
	}
	res.body = response;
	res.headers.CONTENT_TYPE = 'text/json';
	return "WHA HAPPEN";
}
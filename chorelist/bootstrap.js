//bootstrap file
addHttpRequestHandler('\/usertypes\/$','Scripts/routes.js','user_types');
addHttpRequestHandler('\/usertypes\/add\/$','Scripts/routes.js','add_user_type');
addHttpRequestHandler('\/usertypes\/delete\/$','Scripts/routes.js','delete_user_type');
addHttpRequestHandler('\/users\/$','Scripts/routes.js','users');
addHttpRequestHandler('\/users\/add\/$','Scripts/routes.js','add_user');
addHttpRequestHandler('\/$','Scripts/routes.js','dashboard');

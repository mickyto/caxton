var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

router.render = function (req, res) {

    var db = res.locals.data;
    res.jsonp(db);
};

server.use(middlewares);
server.use(router);
server.listen(3001, function () {
    console.log('JSON Server is running on port 3001')
});

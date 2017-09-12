var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

router.render = function (req, res) {

    var db = res.locals.data;

    if (req.method === 'POST') {

        if (req.body.name === null && req.body.i18n === null) {
            res.status(400);
            res.jsonp({
                error: {
                    error_msg: 'root.name element has flag *required*'
                }
            });
            return;
        }
    }

    if (req.method === 'DELETE') {
        res.status(204);
    }

    if (req.query.login) {
        res.jsonp(db[0]);
        return;
    }

    if (/\/vendors\?/.test(req.originalUrl) ||
        /\/measures\?/.test(req.originalUrl) ||
        /\/units\?/.test(req.originalUrl) ||
        /\/properties\?/.test(req.originalUrl) ||
        /\/groups\?/.test(req.originalUrl) ||
        /\/default_values\?/.test(req.originalUrl) ||
        /\/categories\?/.test(req.originalUrl) ||
        /\/users\?/.test(req.originalUrl) ||
        /\/permissions\?/.test(req.originalUrl) ||
        /\/products\?/.test(req.originalUrl) ||
        req.url === '/locales') {
        res.jsonp({ items: db });
        return;
    }
    res.jsonp(db);
};

server.use(middlewares);
server.use(router);
server.listen(3001, function () {
    console.log('JSON Server is running on port 3001')
});

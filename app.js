require('babel-register');

const express = require('express');
const serverMiddleware = require('./src/server').default;

const app = express();

app
    .use('/assets', express.static('dist'))
    .use(serverMiddleware);

app.listen(8080, function() {
    console.log('Listening on 8080...'); // eslint-disable-line no-console
});


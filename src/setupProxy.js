const proxy = require('http-proxy-middleware');

module.exports = app => {
    app.use('/api', proxy({target: 'http://localhost:4000'}))
    app.use('/api/callback', proxy({target: 'http://localhost:4000'}))
}
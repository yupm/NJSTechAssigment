const apiRoutes = require('./routes/apiRoutes');

module.exports = function(app) {

    apiRoutes(app);

    app.get('/', function(req, res) {
        res.send('Hello World!')
    });
};
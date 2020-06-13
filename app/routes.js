module.exports = function(app) {

    app.get('/', function(req, res) {
        res.send('Hello World!')
    });
 
    // BOARD SECTION =========================
    app.get('/endpoint1', async(req, res)=> {
        res.send('Hello endpoint1!')
    });


   app.get('/endpoint2', async(req, res)=> {
        res.send('Hello endpoint2!')
   });


   app.get('/endpoint3', async(req, res)=> {
        res.send('Hello endpoint3!')
   });

}

var express = require('express');
var app = express();
var all = require('./routes/all');

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    res.set({
        "Access-Control-Allow-Origin": "*"
    })
    next()
})


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use('/',all);

app.get("/",function(req,res){
  res.json({name:'will'})
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



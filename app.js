//Node modules
var express = require('express'),
    app = express(),
    path = require('path');

//Paths
var public_dir = "assets",
    views_dir = "views";

app.set('view engine', 'ejs');

app.locals({
    title:"AppName"
})

app.get("/", function(req,res){
    res.render('index.ejs');
});

app.use(express.static(path.join(__dirname, public_dir)));

app.listen(3000);
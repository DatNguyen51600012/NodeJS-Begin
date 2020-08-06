var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine","ejs");

app.set("views" ,"./views");

app.use(express.static(__dirname + '/public'));
app.use('/css', express.static('public/css')).use('/fonts', express.static('public/fonts')).use('/img', express.static('public/img')).use('/js', express.static('public/js')).use('/scss', express.static('public/scss'));


app.listen(3000);

app.get("/", (req,res) => {
    return res.render("HomePage");
});



var express = require("express")
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname, + /'public'));

app.set('views', __dirname, + /'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
	res.sendfile(__dirname, +'/public/index.html');
});

app.listen(app.get('port'), function() {
	console.log('App is running on port ', app.get('port'))
});

var express = require('express');

var app = express();

var routes = require('./routes');

var path  = require('path');
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
//routes
//home
app.get('/',routes.home);

//single episode_number
app.get('/star_wars_episode/:episode_number?',routes.movie_single);

//not found
app.get('*',routes.notFound);

app.listen(3000,function(){
console.log('app is running on port 3000 ctrl+c to exit');

})

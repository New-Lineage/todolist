// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1913');
var db = mongoose.connection;
db.on('error', ()=>{
    console.log('db no ok')
});
db.once('open', function() {
    console.log('db ok')
}); 
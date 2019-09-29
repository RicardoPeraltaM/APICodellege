const Database = require('./app/config/database');
const CONFIG = require('./app/config/config');
const APP = require('./app/app');

Database.connect();
APP.listen(CONFIG.PORT, function(error){
    if(error) return console.log(error);
    
    
    
})
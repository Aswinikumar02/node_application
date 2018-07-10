var OrientDB = require('orientjs');

var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   'root'
});
var db = server.use('test1')
console.log('Using Database:'  + db.name);

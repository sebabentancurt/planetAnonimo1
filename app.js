
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

var app = express();



//Conecto a MongoDB con connect
mongoose.connect('mongodb://sebabentancurt:seba5641456414@ds035237.mongolab.com:35237/af_planetanonimo-sebabentancurt'); 

// Configuracion
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  
  //Cookies session
   app.use(express.bodyParser());
  app.use(express.cookieParser('nhispano'));
  app.use(express.session({secret: 'SECRET' }));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Rutas
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/pagina', routes.pagina);

//Ejecutar servidor express
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));

});

var schema = mongoose.Schema({  name: 'string'
                               ,pass: 'string'
                               ,email: 'string'
                               ,username: 'string'
                               ,fecha: {nacimiento:'date', altas:'array', bajas:'array'}
                               ,localidad: {ciudad: 'string', pais: 'string', paisGeo:'string'}
                               ,activo: 'boolean'
                               ,pregunta: 'string'
                               ,comentario: 'string'
                               ,slogan:'string'
                               ,foto: 'string'
                               ,genero: 'string'
                               ,faceLogin: 'array'
                               ,twitLogin: 'array'
                               ,faceRegistro: 'boolean'
                               ,twitRegistro: 'boolean'
                               });
var usuarios = mongoose.model('usuarios', schema);

//Obtencion datos POST
app.post('/inicio', function(request, response){
var user = new usuarios({ name: ''
                         ,pass: request.body.registroPass
                         ,email: request.body.registroEmail
                         ,username: request.body.registroUser
                         ,fecha: {nacimiento:null ,altas: new Date(Date.now()) , bajas: null}
                         ,localidad: {ciudad: null, pais: null, paisGeo:null}
                         ,activo: true
                         ,pregunta: null
                         ,comentario: null
                         ,slogan: null
                         ,foto: null
                         ,genero: null
                         ,faceLogin: 'no'
                         ,twitLogin: 'no'
                         ,faceRegistro: false
                         ,twitRegistro: false
                         });
user.save(function (err) {
  if (err) // ...
  console.log('meow');
});

});

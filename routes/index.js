
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title:'registro', login: 'undefined' });
};

exports.pagina = function(req, res){
  res.render('pagina', { title: 'pagina' });
};

exports.registro = function(req, res){
  res.render('registro', {title:'registros', user:''});
};

exports.error404 = function(req, res){
  res.render('error/404', { title: 'Pagina no encontrada'});
};

exports.error500 = function(req, res){
  res.render('error/500', { title: 'Error 500' });
};



/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Exspress' });
};

exports.pagina = function(req, res){
  res.render('pagina', { title: 'pagina' });
};
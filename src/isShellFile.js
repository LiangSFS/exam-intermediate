
module.exports = function(filename) {
  //return filename.indexOf('.sh') > -1;

  let index = filename.indexOf('.sh');
  
  return !filename.startsWith('.') && index > 0;
};
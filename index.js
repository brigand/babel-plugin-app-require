var path = require('path');
module.exports = function(babel){
  var t = babel.types;
  return {
    visitor: {
      ImportDeclaration: function(babelPath){
        var node = babelPath.node;
        var source = node.source;

        if (source.type !== 'StringLiteral') return;
        var depPath = source.value;

        if (depPath[0] !== '@') return;
        depPath = depPath.slice(1);

        var absolutePath = path.join(process.cwd(), 'src', depPath);
        source.value = absolutePath;
        source.raw = JSON.stringify(absolutePath);
      }
    }
  };
};

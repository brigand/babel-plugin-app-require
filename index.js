module.exports = function(babel){
    var t = babel.types;
    var Plugin = babel.Plugin;

    return new Plugin('babel-plugin-app-require', {
        visitor: {
            ImportDeclaration: function(node){
                var source = node.source;

                if (source.type !== 'Literal') return node;
                var depPath = source.value;

                if (depPath[0] !== '@') return node;
                depPath = depPath.slice(1);

                var absolutePath = path.join(process.cwd(), 'src', depPath);
                source.value = absolutePath;
                source.raw = JSON.stringify(absolutePath);
                return node;
            }
        }
    });
};

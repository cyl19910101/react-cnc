const ExtractTextPlugin = require ( 'extract-text-webpack-plugin' );

module.exports = {
  entry   : './src/script_entry.js',
  output  : {
    path          : __dirname + '/build_tmp',
    filename      : 'scripts.js',
    library       : 'styles',
    libraryTarget : 'umd2'
  },
  context : __dirname,
  node    : {
    __filename : true
  },
  module  : {
    rules : [
      {
        test   : /\.css$/,
        loader : ExtractTextPlugin.extract (
          {
            fallback : 'style-loader',
            use      : [
              {
                loader  : 'css-loader',
                options : {
                  minimize       : true,
                  modules        : true,
                  importLoaders  : 1,
                  localIdentName : '[name]_[local]_[hash:base64:5]',
                },
              },
            ],
          }
        )
      },
    ]
  },
  plugins : [
    new ExtractTextPlugin ( {
      filename : 'common.css',
    } ),
  ]
};
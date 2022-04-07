const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ghpages = require('gh-pages');

ghpages.publish('dist', function(err) {});

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const path = require('path'); //поможет нам с абсолютным путем, что бы не гадать где проект она уже есть в node.js не надо устанавливать
const glob = require('glob');

const html = [];
const pages = glob.sync(__dirname + '/src/html/*.html');

pages.forEach((file) => {
  const base = path.basename(file, '.html');

  html.push(
    new HtmlWebpackPlugin({
      filename: base + '.html',
      template: './src/html/' + base + '.html',
    }),
  );
});

module.exports = {
  mode: mode, //настраиваем режим сборки, код выше
  entry: {
    main: './src/index.js' // точка входа, куда заглянет вебпак в первую очередь
  },
  output: { //точка выхода , аналог bandle.js из browserify
    path: path.resolve(__dirname, 'dist'), // всегда должен быть абсолютный путь (от корневой папки) в нашем случае npm_webpack - название папки в которой лежит проект path: './dist/' - нет. сейчас вызываем методо path.resolve и передаем ему два параметра __dirname - ссылка на текущую папку, так и пишется и dist - относительный путь до папки в которую будем все сохранять
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext][query]',
    clean: true,
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/img',
          to: 'img/',
        },
        {
          from: 'src/uploads',
          to: 'uploads/',
        },
        {
          from: 'src/products.json',
          to: 'products.json',
        },
      ],
    }),
  ].concat(html),
  module: {
    rules: [{
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-preset-env']
                ]
              }
            }
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  }

}
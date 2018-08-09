const path = require('path')
var webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry : './src/index.js',
    mode: 'production',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
        library : 'VuePaginateMl',
        libraryTarget : 'umd'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jquery: "jquery",
          "window.jQuery": "jquery",
          jQuery:"jquery"
        }),
        new VueLoaderPlugin()
    ]
}

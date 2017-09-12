const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/client',
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ],
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve('./src')],
                loader: 'babel-loader'
            }, {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    ],
                }),
                include: path.resolve(__dirname, 'src')
            }
        ]
    }
};
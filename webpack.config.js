const path = require('path');
const globImporter = require('node-sass-glob-importer');

module.exports = {
    entry: ['./src/index.scss'],
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            path: path.resolve(__dirname, 'dist'),
                            name: 'palenight.theme.css'
                        }
                    },
                    'extract-loader',
                    'css-loader',
                    'postcss-loader', // post process the compiled CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                importer: globImporter(),
                                includePaths: ['./node_modules'],
                                outputStyle: 'compressed'
                            }
                        }
                    }
                ]
            }
        ]
    }
};
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entries = {
    "main": "./src/main.js"
};

module.exports = {
    watch: false,
    mode: "development", // The mode of configuration
    entry: entries, // Our entry object that contains all entries founded
    output: {
        path: path.resolve(__dirname, "wwwroot/dist"), // the output directory
        publicPath: '/dist/',
        filename: "[name].js",
        chunkFilename: '[name].[contenthash].js'
    },
    optimization: {

    },
    plugins: [
           new MiniCssExtractPlugin({ filename: "[name].css" })
    ],
    module: {
        rules: [         
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ],
            },
            {
                // this will load all js files, transpile to es5
                test: "/\.js$/",
                exclude: /(node_modules)/,
                use: { loader: "babel-loader", options: { presets: ["@babel/preset-env"] } }
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: 'images/[name][ext][query]'
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[name][ext][query]'
                }
            }
        ]
    }
};
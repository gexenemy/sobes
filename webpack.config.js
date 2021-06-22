const path = require('path');

module.exports = {
    entry: {
        app: ['./main.ts'],
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    stats: 'errors-only',
    devServer: {
        contentBase: path.join(__dirname),
        clientLogLevel: 'none',
        hot: true,
        liveReload: true,
        watchContentBase: true,
        compress: true,
        port: 9000,
    },
};

const project = {
    "NAME": "SchedulerApp",
    "MAIN_FILE": "./src/index.tsx"
}

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        project.MAIN_FILE
    ],
    output: {
        path: path.join(__dirname, 'dist/debug'),
        filename: project.NAME + '.js',
        libraryTarget: 'umd',
        library: project.NAME,
        umdNamedDefine: true
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', '.html', 'png', 'jpg']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css?$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "redux": "Redux",
        "react-redux": "ReactRedux",
        "jquery": "JQuery",
        "promise": "Promise"
    },
    plugins: []
};
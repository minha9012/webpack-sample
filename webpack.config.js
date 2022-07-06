const path = require('path');

module.exports = {
    mode: 'development',
    entry:{
        main: './src/app.js',
    },
    output: {
        path: path.resolve('./dist'),
    filename: '[name].js'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                    // /\.js$/, //js확장자를 가진 모든파일은 Loader로 돌리겠다. 처리할 패턴을 명시
                use: [
                    // path.resolve('./my-webpack-loader.js') //걸리는 녀석들은 이 파일 동작
                    'style-loader',
                    'css-loader' //순서는 뒤에서부터 앞으로
                ]
            },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader: 'file-loader',
            //     options: {
            //         publicPath: './dist/',
            //         name: '[name].[ext]?[hash]'
            //     }
            //     // use: [ 'file-loader' ]
            // },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    publicPath: './dist/',
                    name: '[name].[ext]?[hash]',
                    limit: 20000, // 20kb 미만이면 url-loader가 base64로 인코딩, 그 이상은 file-loader가 처리
                }
            }
        ]
    }

}
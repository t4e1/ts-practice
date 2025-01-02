// webpack  
// 여러 개의 소스 파일을 하나의 소스 파일로 묶어주는 기능

const path = require("path");

module.exports = {
    mode: "development",
    // entry: "./src/index.ts",
    entry: "./src/iterator/index.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",  // 하나로 묶인 파일의 이름을 bundle.js로 지정
        path: path.resolve(__dirname, "dist"),
    },
}
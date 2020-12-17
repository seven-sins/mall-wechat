const path = require('path');
const { config } = require('process');

module.exports = {
    // 基础路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader是否在保存时检查
    lintOnSave: false,
    // 放置静态资源的地方 (js/css/img/font/...)
    assetsDir: '',
    chainWebpack: () => {},
    configureWebpack: () => {
        config.resolve = {
            // 自动添加文件名后缀
            extensions: ['.js', '.json', '.vue'],
            alias: {
                '@': path.resolve(__dirname, './src'),
                'public': path.resolve(__dirname, './public'),
                'data': path.resolve(__dirname, './src/data')
            }
        }
    },
    // 是否为生产环境构建生成 source map？
    productionSourceMap: true,
    runtimeCompiler: true,
    // css相关配置
    // CSS 相关选项
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
        extract: true,

        // 是否开启 CSS source map？
        sourceMap: false,

        loaderOptions: {
            postcss: {
                plugins: [
                    // require('postcss-pxtorem')({
                    //     rootValue: 37.5, // 换算的基数
                    //     propList: ['*'],
                    // }),
                    require('autoprefixer')({
                        overrideBrowserslist: [
                            "Android 4.1",
                            "iOS 7.1",
                            "Chrome > 31",
                            "ff > 31",
                            "ie >= 8"
                            //'last 10 versions', // 所有主流浏览器最近10版本用
                        ],
                        grid: true
                    })
                ]
            }
        },
        // 这个选项不会影响 `*.vue` 文件。
        requireModuleExtension: true
    },
    // pwa插件
    pwa: {},
    // dev-server
    devServer: {
        port: 10001,
        hot: true,
        proxy: {
            '/rest': {
                target: 'http://127.0.0.1:8889',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/rest': '/rest'
                }
            }
        },
    }
}

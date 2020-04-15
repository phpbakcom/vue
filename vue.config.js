module.exports = {
    devServer: {
        proxy: {
            '/apis': {
                target: 'http://localhost',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/apis': ''
                }
            },
            '/phpbak': {
                target: 'http://www.phpbak.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/phpbak': ''
                }
            }
        }
    }
}
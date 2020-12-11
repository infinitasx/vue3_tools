const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const os = require('os');
const path = require('path');

const IS_PROD = process.env.NODE_ENV === 'production';
const smp = new SpeedMeasurePlugin({
    disable: !IS_PROD,
});

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8091,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        proxy: 'http://127.0.0.1:5000',
    },
    productionSourceMap: false,
    configureWebpack: smp.wrap({
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve('src'),
                    use: [
                        {
                            loader: 'thread-loader',
                            options: {
                                workers: os.cpus.length,
                                workerParallelJobs: 50,
                                workerNodeArgs: ['--max-old-space-size=1024'],
                                poolRespawn: false,
                                poolTimeout: 2000,
                                poolParallelJobs: 50,
                                name: 'my-pool',
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            IS_PROD && new HardSourceWebpackPlugin(),
            IS_PROD && new BundleAnalyzerPlugin(),
            IS_PROD &&
                new TerserPlugin({
                    sourceMap: false,
                    terserOptions: {
                        compress: {
                            drop_console: true,
                        },
                    },
                }),
        ].filter(Boolean),
    }),
};

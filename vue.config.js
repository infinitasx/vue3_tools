const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const os = require('os');
const path = require('path');

const smp = new SpeedMeasurePlugin();
const IS_PROD = process.env.NODE_ENV === 'production';

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
            new ProgressBarPlugin(),
            IS_PROD && new WebpackMd5Hash(),
            IS_PROD && new HardSourceWebpackPlugin(),
            IS_PROD && new BundleAnalyzerPlugin(),
        ].filter(Boolean),
    }),
};

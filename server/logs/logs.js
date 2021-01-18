const log4js = require('koa-log4');

log4js.configure({
  appenders: {
    out: {
      type: 'console',
    },
  },
  categories: {
    default: { appenders: ['out'], level: 'info' },
  },
});
exports.logger = () => log4js.koaLogger(log4js.getLogger('default'));

/*
 * @Author: huyanhai
 * @since: 2021-01-12 15:46:09
 * @LastAuthor: huyanhai
 * @lastTime: 2021-01-18 15:04:44
 * @FilePath: /vue3_tools/server/middleware/routerResponse.js
 * @Description:routerResponse
 */
const routerResponse = (option = {}) => {
  return function (ctx, next) {
    ctx.success = function (data) {
      ctx.type = option.type || 'json';
      ctx.body = {
        code: option.successCode || 200,
        msg: option.successMsg || 'success',
        data: data,
      };
    };

    ctx.fail = function (msg, code) {
      ctx.type = option.type || 'json';
      ctx.body = {
        code: code || option.failCode || 500,
        msg: msg || option.successMsg || 'fail',
      };
    };

    next();
  };
};

module.exports = routerResponse;

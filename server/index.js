/*
 * @Author: huyanhai
 * @since: 2021-01-12 11:14:41
 * @LastAuthor: huyanhai
 * @lastTime: 2021-01-18 17:21:28
 * @FilePath: /vue3_tools/server/index.js
 * @Description:服务端入口
 */
const Koa = require('koa2');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const mockApi = require('./routers/mock');
const routerResponse = require('./middleware/routerResponse');
const { logger } = require('./logs/logs');

const { PORT } = require('./constant');
const app = new Koa();

onerror(app);

app.use(bodyparser());
app.use(routerResponse());
app.use(logger());

app.use((ctx, next) => {
  ctx.body = 'hellow koa';
  next();
});

app.use(mockApi.routes());

app.listen(PORT, () => {
  console.log(`listen port at:${PORT}`);
});

/*
 * @Author: huyanhai
 * @since: 2021-01-12 11:14:41
 * @LastAuthor: huyanhai
 * @lastTime: 2021-01-12 16:29:18
 * @FilePath: /vue3_tools/server/index.js
 * @Description:服务端入口
 */
const Koa = require('koa2');
const logger = require('koa-logger');
const onerror = require('koa-onerror');
const mockApi = require('./routers/mock');
const routerResponse = require('./middleware/routerResponse');

const { PORT } = require('./constant');
const app = new Koa();

onerror(app);

app.use(logger());
app.use(routerResponse());

app.use((ctx, next) => {
  ctx.body = 'hellow koa';
  next();
});

app.use(mockApi.routes());

app.listen(PORT, () => {
  console.log(`listen port at:${PORT}`);
});

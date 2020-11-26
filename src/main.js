import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import element from '../package/index';
const app = createApp(App);

app.config.isCustomElement = tag => tag.startsWith('apps-');

app.use(element);
app.use(store);
app.use(router);

// app.mixin()
// app.directive()
// app.component()

app.mount('#app');

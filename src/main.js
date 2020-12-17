import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
const app = createApp(App);

// app.config.isCustomElement = tag => tag.startsWith('apps-');

app.use(store);
app.use(router);

// app.mixin()
// app.directive()
// app.component()

// Sentry init
if (process.env.NODE_ENV !== 'development') {
    /* eslint-disable no-undef */
    Sentry.init({
        dsn: '',
        integrations: [
            new Sentry.Integrations.Vue({ Vue: app, attachProps: true }),
            new Sentry.Integrations.BrowserTracing(),
        ],
        // We recommend adjusting this value in production, or using tracesSampler
        // for finer control
        tracesSampleRate: 1.0,
    });
    /* eslint-enable */
}

app.mount('#app');

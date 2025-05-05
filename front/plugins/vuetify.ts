// Vuetifyプラグインの初期化
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#1e88e5', // モダンなブルー
            secondary: '#ffca28', // 明るいイエロー
            accent: '#e91e63', // 鮮やかなピンク
            error: '#f44336',
            warning: '#ff9800',
            info: '#2196f3',
            success: '#4caf50',
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
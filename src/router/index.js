import Vue from 'vue';
import Router from 'vue-router';
import Covid19Tracking from '@/components/Covid19Tracking';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Covid19Tracking',
      component: Covid19Tracking,
    },
  ],
});

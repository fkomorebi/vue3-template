import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect(to) {
        return {
          name: 'Login',
          query: to.query,
        };
      },
    },
  ],
})

export default router;

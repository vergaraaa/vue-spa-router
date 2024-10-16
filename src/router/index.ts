import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import NotFound from '@/modules/common/pages/NotFound.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // landing routes
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pokemons/:id',
          name: 'pokemon',
          props: route => {
            const id = Number(route.params.id);

            return isNaN(id) ? { id: 1 } : { id };
          },
          beforeEnter: [isAuthenticatedGuard],
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },

    // auth routes
    {
      path: '/auth',
      redirect: { name: 'login' },
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    // not found
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
});

export default router;

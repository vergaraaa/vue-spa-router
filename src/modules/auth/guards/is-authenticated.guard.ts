import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
} from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: NavigationGuardNext,
) => {
  const userId = localStorage.getItem('userId');
  localStorage.setItem('lastPath', to.path);

  if (!userId) return next({ name: 'login' });

  return next();
};

export default isAuthenticatedGuard;

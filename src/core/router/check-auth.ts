import { store } from 'store';

function checkAuth(): boolean {
  const isAuthorized = !!store.getState().user;

  return isAuthorized;
}

export { checkAuth };

import { Block } from '../block';
import Route from './route';
import { RouteOptions, RouteTarget } from '../types';
import { checkAuth } from './check-auth';
import { ROUTES, ROUTE_TYPES } from 'constant';

class Router {
  private routes: Array<Route> = [];
  private history: History = window.history;
  private _currentRoute: Route | null | undefined = null;
  public static __instance: Router | undefined;
  private _rootQuery: string = '#root';
  private changeUrl: (event: Event) => void = (event: Event) => {
    const target = event.currentTarget as RouteTarget | null;

    if (!target) {
      return;
    }
    this._onRoute(target.location.pathname);
  };

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  get allRoutes() {
    return this.routes;
  }

  get currentRoute() {
    return this._currentRoute;
  }

  get rootQuery() {
    return this._rootQuery;
  }

  setRootQuery(rootQuery: string = '#root') {
    this._rootQuery = rootQuery;
  }

  use(pathname: string, block: typeof Block, options: RouteOptions) {
    const route = new Route(pathname, block, {
      rootQuery: this._rootQuery || '',
      ...options,
    });

    this.routes.push(route);

    // Возврат this — основа паттерна "Builder" («Строитель»)
    return this;
  }

  start() {
    // Реагируем на изменения в адресной строке и вызываем перерисовку
    window.addEventListener('popstate', this.changeUrl);

    this._onRoute(window.location.pathname);
  }

  close() {
    window.removeEventListener('popstate', this.changeUrl);
  }

  _onRoute(pathname: string = window.location.pathname) {
    let route = this.getRoute(pathname);

    if (route?.isPrivate && !checkAuth()) {
      this.go(ROUTES[ROUTE_TYPES.LOGIN]);
      return;
    }

    if (pathname === '/') {
      this.go(ROUTES[ROUTE_TYPES.CHAT_LIST]);
      return;
    }

    if (!route) {
      this.go(ROUTES[ROUTE_TYPES.NOT_FOUND]);
      return;
    }

    if (
      !route?.isPrivate &&
      !route.match(ROUTES[ROUTE_TYPES.NOT_FOUND]) &&
      checkAuth()
    ) {
      this.go(ROUTES[ROUTE_TYPES.CHAT_LIST]);
      return;
    }

    if (
      route &&
      this._currentRoute &&
      route.pathname !== this._currentRoute?.pathname
    ) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route?.render();
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    window.history.back();
  }

  forward() {
    window.history.forward();
  }

  getRoute(pathname: string = window.location.pathname): Route | undefined {
    const path = pathname.split('?')[0];
    return this.routes.find((route) => route.match(path));
  }
}

export { Router };

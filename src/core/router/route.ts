import { Block } from '../block';
import { RouteProps } from '../types';
import { isEqual, render } from '../utils';

function getParams() {
  const urlSearchParams = new URLSearchParams(
    window.location.search.replace(/\&amp;/g, '&')
  );
  return Object.fromEntries(urlSearchParams.entries());
}

class Route {
  private _pathname;
  private _blockClass: typeof Block;
  private _block: null | Block<RouteProps, {}>;
  private _props: RouteProps;

  constructor(pathname: string, view: typeof Block, props: RouteProps) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  get dom() {
    return this._block?.getContent()?.dom;
  }

  get pathname() {
    return this._pathname;
  }

  get isPrivate() {
    return this._props.isPrivate;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.componentdidUnmount();
    }
    this._block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    const props = Object.assign({}, this._props, { query: getParams() });
    if (!this._block) {
      this._block = new this._blockClass<RouteProps, {}>(props);
      render(this._props.rootQuery, this._block.getContent()?.dom);
      return;
    } else {
      this._block.setProps(props);
    }
  }
}

export default Route;

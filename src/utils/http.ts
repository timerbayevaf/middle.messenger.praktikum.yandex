import { URI } from 'constant';
import { FetchOptions, TBody, TQuery } from 'src/types/fetch';
import { HTTPTransport } from './http-transport';

class HTTP extends HTTPTransport {
  private uri = URI.BASE;
  private _url = '';

  constructor(url: string) {
    super();
    this._url = url;
  }

  async get<T>(path: string, options: FetchOptions<TQuery> = {}) {
    return super.get<T>(this.uri + this._url + path, options);
  }

  post<T>(path: string, options: FetchOptions<TBody> = {}) {
    return super.post<T>(this.uri + this._url + path, options);
  }

  async put<T>(path: string, options: FetchOptions<TBody> = {}) {
    return super.put<T>(this.uri + this._url + path, options);
  }

  async delete<T>(path: string, options: FetchOptions<TBody> = {}) {
    return super.delete<T>(this.uri + this._url + path, options);
  }
}

export { HTTP };

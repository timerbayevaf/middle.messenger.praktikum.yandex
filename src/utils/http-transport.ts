import { METHODS } from 'constant';
import { TBody, TQuery } from 'src/types/fetch';
import { FetchOptions } from 'types';
import { queryStringify } from './query-stringify';
class HTTPTransport {
  async get<T>(url: string, options: FetchOptions<TQuery> = {}) {
    return this.request<T>(url, {
      headers: {
        'content-type': 'application/json', // Данные отправляем в формате JSON
      },
      ...options,
      method: METHODS.GET,
    });
  }

  async post<T>(url: string, options: FetchOptions<TBody> = {}) {
    return this.request<T>(url, {
      headers: {
        'content-type': 'application/json', // Данные отправляем в формате JSON
      },
      ...options,
      method: METHODS.POST,
    });
  }

  async put<T>(url: string, options: FetchOptions<TBody> = {}) {
    return this.request<T>(url, {
      headers: {
        'content-type': 'application/json', // Данные отправляем в формате JSON
      },
      ...options,
      method: METHODS.PUT,
    });
  }

  async delete<T>(url: string, options: FetchOptions<TBody> = {}) {
    return this.request<T>(url, {
      headers: {
        'content-type': 'application/json', // Данные отправляем в формате JSON
      },
      ...options,
      method: METHODS.DELETE,
    });
  }

  async request<T>(
    url: string,
    options: FetchOptions<TBody | TQuery> = {}
  ): Promise<T> {
    const {
      timeout = 5000,
      headers = {},
      method,
      responseType = 'json',
      data,
    } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();

      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data ? `${url}?=${queryStringify(data as TQuery)}` : url
      );

      xhr.timeout = timeout;
      xhr.responseType = responseType;
      xhr.withCredentials = true;

      Object.keys(headers).forEach((key) => {
        if (headers[key]) {
          xhr.setRequestHeader(key, headers[key]);
        }
      });

      xhr.onload = function () {
        if (xhr.status != 200 && xhr.status !== 500) {
          // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
          reject(new Error(xhr.response.reason));
        } else if (xhr.status === 500) {
          reject(new Error('Ошибка на сервера'));
        }
        resolve(xhr.response);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data as FormData);
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}

export { HTTPTransport };

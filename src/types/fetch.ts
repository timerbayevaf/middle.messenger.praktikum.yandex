import { METHODS } from 'constants';

type Keys = keyof typeof METHODS;
type MethodValues = typeof METHODS[Keys]; //  "GET" | "POST" | "PUT" | "DELETE"
type TBody =
  | Document
  | XMLHttpRequestBodyInit
  | null
  | Record<string, string | number | number[] | string[]>;
type TQuery = Record<string, number | string | number[] | string[]>;

interface FetchOptions<T> {
  timeout?: number;
  method?: MethodValues;
  data?: T;
  responseType?: XMLHttpRequestResponseType;
  headers?: Record<string, string>;
}

export { FetchOptions, MethodValues, TBody, TQuery };

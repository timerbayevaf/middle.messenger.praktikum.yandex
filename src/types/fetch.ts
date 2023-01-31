import { METHODS } from 'constants';

type Keys = keyof typeof METHODS;
type MethodValues = (typeof METHODS)[Keys]; //  "GET" | "POST" | "PUT" | "DELETE"
type TBody = Document | XMLHttpRequestBodyInit | null;
type TQuery = Record<string, number | string>;

interface FetchOptions<T> {
  timeout?: number;
  method?: MethodValues;
  data?: T;
  headers?: Record<string, string>;
}

export { FetchOptions, MethodValues, TBody, TQuery };

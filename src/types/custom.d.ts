declare namespace JSX {
  type Element = string;
  interface IntrinsicElements {
    [eleName: string]: any;
  }
}

declare module '*.css';

declare module 'bundle-text:*.svg';

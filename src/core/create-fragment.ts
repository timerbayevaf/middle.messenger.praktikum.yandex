import { appendChild } from './append-child';
import { IProps } from './types';

export const AIcreateFragment = (attrs?: IProps): DocumentFragment => {
  const fragment = document.createDocumentFragment();

  attrs?.children?.forEach((child: any) => {
    if (Array.isArray(child)) {
      child.forEach((el) => {
        appendChild(fragment, el);
      });
    } else {
      appendChild(fragment, child);
    }
  });

  return fragment;
};

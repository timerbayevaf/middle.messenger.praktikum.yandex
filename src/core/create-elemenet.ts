import { AiCreateTextElement } from './create-text';
import { FunctionElement } from './types';
import { checkTypicalNode } from './utils';

const AIcreateElement = (
  type: FunctionElement | string,
  props: JSX.HTMLAttributes,
  ...children: []
): JSX.Element => {
  const _props: JSX.HTMLAttributes = Object.assign({}, props);
  const hasChildren = children.length > 0;
  const rawChildren = hasChildren ? [].concat(...children) : [];

  _props.children = rawChildren
    .filter((c) => c != null && c !== false)
    .map((c) => (checkTypicalNode(c) ? AiCreateTextElement(c) : c));

  if (typeof type === 'string') {
    return { type, props: _props };
  }

  if (typeof type === 'function') {
    return type(_props);
  }

  throw new SyntaxError(
    `Unexpected type: ${type}, expected type: string | function`
  );
};

export { AIcreateElement };

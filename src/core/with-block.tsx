import { Block } from './block';
import { AIcreateElement } from './create-elemenet';

export function withBlock<T extends {}>(Child: JSX.FunctionComponent<T>) {
  return class extends Block<T> {
    static displayName = `withBlock(${Child.displayName || Child.name})`;

    constructor(props: T) {
      super(props);
    }

    render(): JSX.Element {
      return <Child {...this.props} />;
    }
  };
}

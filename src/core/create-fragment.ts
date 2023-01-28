import { AiElementTypes } from './constant';

const AIcreateFragment = (props: JSX.HTMLProps) => {
  return {
    type: AiElementTypes.FRAGMENT,
    props,
  };
};

export { AIcreateFragment };

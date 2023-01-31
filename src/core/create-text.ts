import { AiElementTypes } from './constant';

const AiCreateTextElement = (text: string) => {
  return {
    type: AiElementTypes.TEXT,
    props: { nodeValue: text },
  };
};

export { AiCreateTextElement };

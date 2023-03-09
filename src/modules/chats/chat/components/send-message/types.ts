import { MODAL_TYPE } from 'constant';

interface SendMessageProps {
  message: string;
  handleChange: JSX.EventHandler;
  handleSubmit: JSX.EventHandler;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
}

export { SendMessageProps };

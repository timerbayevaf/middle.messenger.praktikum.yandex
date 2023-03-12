import { CHATLIST_VIEW, MODAL_TYPE } from 'constant';

interface HeaderProps {
  searchValue: string;
  viewType: CHATLIST_VIEW;
  handleChangeSearch(e: Event): void;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
  handleChangeViewType(viewType: CHATLIST_VIEW): void;
}

export { HeaderProps };

import { CHATLIST_VIEW, MODAL_TYPE } from 'constants';

interface HeaderProps {
  searchValue: string;
  title: string;
  isShowSearch: boolean;
  handleChangeSearch(e: Event): void;
  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect: DOMRect;
  }): void;
  handleChangeUrl(profileViewType: CHATLIST_VIEW): void;
}

export { HeaderProps };

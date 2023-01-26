import { Block, AIcreateElement, AIcreateFragment } from 'core';
import { ModalDialog } from 'components/modal-dialog/modal-dialog';
import Chats from 'modules/chats/chats';
import { CHATLIST_VIEW, MODAL_TYPE } from 'constants';
import {
  checkCorrectField,
  isSpecName,
  PASSWORD_SECOND_CHECK,
} from 'utils/regexp';
import { isEmpty } from 'utils/isEmpty';
import { USER_SPEC_TYPE, ChatsPageProps, ChatsState } from './types';
import { PASSWORD_SPEC, PROFILE_SPEC } from './constants';

export class ChatsPageBase extends Block<ChatsPageProps, ChatsState> {
  constructor(props: ChatsPageProps) {
    super(props);
  }

  init() {
    this.state = this._setState({
      modalInfo: {
        modalType: MODAL_TYPE.NONE,
        styles: {},
      },
      searchValue: '',
      message: '',
      activeId: null,
      profileInfo: {
        avatar: '',
        old_password: '',
        new_password: '',
        second_new_password: '',
        first_name: '',
        second_name: '',
        display_name: '',
        email: '',
        login: '',
        phone: '',
      },
      profileError: {},
    });

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeActiveChat = this.handleChangeActiveChat.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
    this.handleChangeFields = this.handleChangeFields.bind(this);
    this.handleSubmitFields = this.handleSubmitFields.bind(this);
    this.handleChangeVisibleModal = this.handleChangeVisibleModal.bind(this);

    document.addEventListener('click', (e: Event) => {
      if ((e.target as HTMLDivElement)?.id !== 'dialogBackdrop') {
        this.handleChangeVisibleModal({
          modalType: MODAL_TYPE.NONE,
        });
      }
    });
  }

  render() {
    return AIcreateFragment({
      children: [
        Chats({
          ...this.props,
          ...this.state,
          handleChangeSearch: this.handleChangeSearch,
          handleChangeActiveChat: this.handleChangeActiveChat,
          handleChangeMessage: this.handleChangeMessage,
          handleSubmitMessage: this.handleSubmitMessage,
          handleChangeFields: this.handleChangeFields,
          handleSubmitFields: this.handleSubmitFields,
          handleChangeVisibleModal: this.handleChangeVisibleModal,
        }),
        ModalDialog({
          modalType: this.state.modalInfo.modalType,
          style: this.state.modalInfo.styles,
        }),
      ],
    });
  }

  handleChangeSearch(e: Event): void {
    this.state.searchValue = (e.target as HTMLInputElement)?.value;
  }

  handleChangeActiveChat(id: number): void {
    this.state.activeId = id;
  }

  handleChangeMessage(e: Event): void {
    this.state.message = (e.target as HTMLInputElement)?.value;
  }

  handleSubmitMessage(e: Event): void {
    e.preventDefault();

    if (this.state.message?.length === 0) {
      return;
    }

    console.log('message', this.state.message);
    this.state.message = '';
  }

  handleChangeFields(e: Event): void {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement)?.value?.trim();

    if (
      isSpecName<USER_SPEC_TYPE>(name) &&
      !PASSWORD_SECOND_CHECK.includes(name)
    ) {
      const { result: isCorrect, error } = checkCorrectField(name, value);

      this.state.profileInfo = { ...this.state.profileInfo, [name]: value };

      if (isCorrect) {
        delete this.state.profileError[name];
      } else {
        this.state.profileError = {
          ...this.state.profileError,
          [name]: error,
        };
      }
    }

    if (isSpecName(name) && name === 'second_new_password') {
      const isCorrect = this.state.profileInfo.new_password === value;

      this.state.profileInfo = { ...this.state.profileInfo, [name]: value };

      if (isCorrect) {
        delete this.state.profileError[name];
      } else {
        this.state.profileError = {
          ...this.state.profileError,
          [name]: `Пароли не совпадают`,
        };
      }
    }
  }

  handleSubmitFields(e: Event): void {
    e.preventDefault();

    if (!isEmpty(this.state.profileError)) {
      return;
    }

    const viewType = (e.target as HTMLFormElement).name;

    let isOk = true;
    const SPEC_NAMES =
      viewType === CHATLIST_VIEW.EDIT_PASSWORD ? PASSWORD_SPEC : PROFILE_SPEC;

    SPEC_NAMES.filter(isSpecName<USER_SPEC_TYPE>).forEach((name) => {
      const { result, error } = checkCorrectField(
        name,
        this.state.profileInfo[name]
      );

      if (!result) {
        isOk = result;
        this.state.profileError = {
          ...this.state.profileError,
          [name]: error,
        };
      }
    });

    if (!isOk) {
      return;
    }

    if (viewType === CHATLIST_VIEW.EDIT_PASSWORD) {
      console.log('edit_password', {
        old_password: this.state.profileInfo.old_password,
        new_password: this.state.profileInfo.new_password,
        second_new_password: this.state.profileInfo.second_new_password,
      });
    } else if (viewType === CHATLIST_VIEW.EDIT_PROFILE) {
      console.log('edit_profile', {
        first_name: this.state.profileInfo.first_name,
        second_name: this.state.profileInfo.second_name,
        display_name: this.state.profileInfo.display_name,
        email: this.state.profileInfo.email,
        login: this.state.profileInfo.login,
        phone: this.state.profileInfo.phone,
      });
    }
  }

  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect?: DOMRect;
  }): void {
    if (MODAL_TYPE.NONE === modalInfo.modalType) {
      this.state.modalInfo = {
        modalType: MODAL_TYPE.NONE,
        styles: {},
      };
    } else if (modalInfo.rect) {
      const rect = modalInfo.rect;
      const indent = 8;
      const maxHeight = 100;
      const maxWidth = 160;
      let top = rect.bottom + indent;
      let left = rect.left + indent;

      if (top + maxHeight > document.documentElement.clientHeight) {
        // если тултип не влезает по высоте, то поднимаем его над элементом
        top = rect.top - maxHeight - indent;
      }

      if (left + maxWidth > document.documentElement.clientWidth) {
        // если тултип не влезает по высоте, то поднимаем его над элементом
        left = rect.left - maxWidth - indent;
      }

      this.state.modalInfo = {
        modalType: modalInfo.modalType,
        styles: { top: top + 'px', left: left + 'px' },
      };
    }
  }
}

export default ChatsPageBase;

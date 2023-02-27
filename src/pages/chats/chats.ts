import { Block, AIcreateFragment, connect, router } from 'core';
import { ModalDialog } from 'components/modal-dialog/modal-dialog';
import Chats from 'modules/chats/chats';
import {
  CHATLIST_VIEW,
  MODAL_TYPE,
  ROUTES,
  ROUTE_TYPES,
  validateProfileInfoRules,
  validateProfilePasswordRules,
  ValidateType,
} from 'constants';
import {
  ChatsPageProps,
  ChatsState,
  USER_INFO_SPEC_TYPE,
  USER_PASSWORD_SPEC_TYPE,
} from './types';
import { AppState, IChatItemDTO, IUserDTO } from 'types';
import { isSpecName } from 'utils/spec';
import { getViewType } from 'utils/get-view-type';
import { checkCorrectField, validateFields } from 'utils/validate';
import chatController from 'controllers/chats';
import userController from 'controllers/user';

const isUserProfileInfoSpecName = isSpecName<USER_INFO_SPEC_TYPE>(
  validateProfileInfoRules
);
const validateProfilePasswordWithRepatRules = [
  ValidateType.Password,
  ...validateProfilePasswordRules,
];
const isUserProfilePasswordSpecName = isSpecName<USER_PASSWORD_SPEC_TYPE>(
  validateProfilePasswordWithRepatRules
);

const userProfileInfoValidator = validateFields(validateProfileInfoRules);
const userProfilePasswordValidator = validateFields(
  validateProfilePasswordWithRepatRules
);

const DefaultUserInfo: IUserDTO = {
  first_name: '',
  second_name: '',
  display_name: '',
  email: '',
  login: '',
  phone: '',
  id: 0,
  avatar: null,
};

class ChatsPageBase extends Block<ChatsPageProps, ChatsState> {
  constructor(props: ChatsPageProps) {
    super(props);
  }

  init() {
    chatController.fetchChats({
      offset: 0,
      limit: 50,
      title: '',
    });

    this.state = this.setState({
      modalInfo: {
        modalType: MODAL_TYPE.NONE,
        styles: {},
      },
      searchValue: '',
      message: '',
      profileInfo: this.props.user ? { ...this.props.user } : DefaultUserInfo,
      profilePassword: {
        oldPassword: '',
        newPassword: '',
        password: '',
      },
      profileError: {},
    });

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeActiveChat = this.handleChangeActiveChat.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
    this.handleChangeUserInfoFields =
      this.handleChangeUserInfoFields.bind(this);
    this.handleSubmitUserInfoFields =
      this.handleSubmitUserInfoFields.bind(this);
    this.handleChangeUserPasswordFields =
      this.handleChangeUserPasswordFields.bind(this);
    this.handleSubmitUserPasswordFields =
      this.handleSubmitUserPasswordFields.bind(this);
    this.handleChangeVisibleModal = this.handleChangeVisibleModal.bind(this);
    this.handleChangeViewType = this.handleChangeViewType.bind(this);
    this.handleChangeAvatar = this.handleChangeAvatar.bind(this);
    this.handleSubmitCreateChat = this.handleSubmitCreateChat.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  render() {
    return AIcreateFragment({
      children: [
        Chats({
          viewType: getViewType(this.props?.query),
          ...this.props,
          ...this.state,
          handleChangeSearch: this.handleChangeSearch,
          handleChangeActiveChat: this.handleChangeActiveChat,
          handleChangeMessage: this.handleChangeMessage,
          handleSubmitMessage: this.handleSubmitMessage,
          handleChangeUserInfoFields: this.handleChangeUserInfoFields,
          handleSubmitUserInfoFields: this.handleSubmitUserInfoFields,
          handleChangeUserPasswordFields: this.handleChangeUserPasswordFields,
          handleSubmitUserPasswordFields: this.handleSubmitUserPasswordFields,
          handleChangeVisibleModal: this.handleChangeVisibleModal,
          handleChangeViewType: this.handleChangeViewType,
          handleChangeAvatar: this.handleChangeAvatar,
          handleSubmitCreateChat: this.handleSubmitCreateChat,
        }),
        ModalDialog({
          error: this.props.errorMessage || '',
          modalType: this.state.modalInfo.modalType,
          style: this.state.modalInfo.styles,
          handleChangeViewType: this.handleChangeViewType,
          handleChangeVisibleModal: this.handleChangeVisibleModal,
        }),
      ],
    });
  }

  handleChangeSearch(e: Event): void {
    this.state.searchValue = (e.target as HTMLInputElement)?.value;
  }

  handleChangeActiveChat(chat: IChatItemDTO): void {
    chatController.changeChat(chat);
  }

  handleChangeMessage(e: Event): void {
    this.state.message = (e.target as HTMLInputElement)?.value;
  }

  handleSubmitMessage(e: Event): void {
    e.preventDefault();

    if (this.state.message?.length === 0) {
      return;
    }

    chatController.sendMessageToChat(this.state.message);
    this.state.message = '';
  }

  handleChangeUserInfoFields(e: Event): void {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement)?.value?.trim();

    if (isUserProfileInfoSpecName(name)) {
      const validateData = checkCorrectField(name, value);

      if (validateData) {
        this.state.profileError = {
          ...this.state.profileError,
          [name]: validateData,
        };
      } else {
        this.state.profileError = { ...this.state.profileError, [name]: '' };
      }

      this.state.profileInfo = { ...this.state.profileInfo, [name]: value };
    }
  }

  handleSubmitUserInfoFields(e: Event): void {
    e.preventDefault();

    const userInfo = {
      ...this.props.user,
      ...this.state.profileInfo,
    };

    const validateData = userProfileInfoValidator(userInfo);

    if (validateData.isCorrect) {
      this.state.profileError = {};
      userController.changeUserInfo(userInfo as any);
    } else {
      this.state.profileError = {
        ...this.state.profileError,
        ...validateData.errors,
      };
    }
  }

  handleChangeUserPasswordFields(e: Event): void {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement)?.value?.trim();

    if (isUserProfilePasswordSpecName(name)) {
      const validateData = checkCorrectField(name, value);

      if (validateData) {
        this.state.profileError = {
          ...this.state.profileError,
          [name]: validateData,
        };
      } else {
        this.state.profileError = { ...this.state.profileError, [name]: '' };
      }

      if (name === ValidateType.NewPassword && !validateData) {
        const isCorrect = this.state.profilePassword.password === value;
        if (isCorrect) {
          this.state.profileError = {
            ...this.state.profileError,
            [name]: '',
          };
        } else {
          this.state.profileError = {
            ...this.state.profileError,
            [name]: `Пароли не совпадают`,
          };
        }
      }

      this.state.profilePassword = {
        ...this.state.profilePassword,
        [name]: value,
      };
    }
  }

  handleSubmitUserPasswordFields(e: Event): void {
    e.preventDefault();

    const userPassword = this.state.profilePassword;

    const validateData = userProfilePasswordValidator(userPassword);

    if (validateData.isCorrect) {
      this.state.profileError = {};
      userController.changeUserPassword({
        oldPassword: userPassword.oldPassword,
        newPassword: userPassword.newPassword,
      });
    } else {
      this.state.profileError = {
        ...this.state.profileError,
        ...validateData.errors,
      };
    }
  }

  handleSubmitCreateChat(e: Event) {
    e.preventDefault();
    const chatName = (e.target as HTMLFormElement).chatName.value;

    chatController.createChat({ title: chatName });
  }

  handleChangeAvatar(e: Event) {
    e.preventDefault();

    const files = (e.target as HTMLInputElement).files;

    const avatar = (files as FileList)[0];

    const form = new FormData();
    form.append('avatar', avatar, 'avatar.jpeg');

    userController.changeUserAvatar(form);
  }

  handleChangeViewType(viewType: CHATLIST_VIEW) {
    router.go(ROUTES[ROUTE_TYPES.CHAT_LIST] + `?viewType=${viewType}`);
  }

  private hideModal(e: Event) {
    if ((e.target as HTMLDivElement)?.id !== 'dialogBackdrop') {
      this.handleChangeVisibleModal({
        modalType: MODAL_TYPE.NONE,
      });
    }
  }

  handleChangeVisibleModal(modalInfo: {
    modalType: MODAL_TYPE;
    rect?: DOMRect;
  }): void {
    if (
      this.state.modalInfo.modalType === MODAL_TYPE.NONE &&
      modalInfo.modalType === MODAL_TYPE.NONE
    ) {
      return;
    }

    if (MODAL_TYPE.NONE === modalInfo.modalType) {
      document.removeEventListener('click', this.hideModal);
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
    } else {
      this.state.modalInfo = {
        modalType: modalInfo.modalType,
        styles: {
          top: '50%',
          left: '50%',
          width: '300px',
          transform: 'translate(-50%, -50%)',
        },
      };
    }
    document.addEventListener('click', this.hideModal);
  }
}

function mapUserToProps(state: AppState) {
  return {
    user: state.user,
    chats: state.chats,
    chat: state.chat,
    errorMessage: state.errorMessage,
    chatMessages: state.chatMessages,
  };
}

export default connect<ChatsPageProps>(ChatsPageBase, mapUserToProps);

import { Block, AIcreateElement } from 'core';
import Chats from 'modules/chats/chats';
import { CHATLIST_VIEW } from 'constants';
import { IChatMessage } from 'types';
import {
  checkCorrectField,
  isSpecName,
  PASSWORD_SECOND_CHECK,
  SPEC_NAME,
} from 'utils/regexp';
import { isEmpty } from 'utils/isEmpty';

const PASSWORD_SPEC: USER_SPEC_TYPE[] = [
  'old_password',
  'new_password',
  'second_new_password',
];
const PROFILE_SPEC: USER_SPEC_TYPE[] = [
  'login',
  'email',
  'display_name',
  'first_name',
  'second_name',
  'phone',
];

type USER_SPEC_TYPE =
  | 'login'
  | 'email'
  | 'display_name'
  | 'first_name'
  | 'second_name'
  | 'phone'
  | 'old_password'
  | 'new_password'
  | 'second_new_password';

interface ChatsPageProps
  extends Pick<ChatsProps, 'viewType' | 'chatMessages'> {}

interface ChatsState
  extends Pick<
    ChatsProps,
    'message' | 'activeId' | 'searchValue' | 'profileInfo' | 'profileError'
  > {}

interface ChatsProps {
  message: string;
  viewType: CHATLIST_VIEW;
  chatMessages: IChatMessage[];
  searchValue: string;
  activeId: number | null;
  profileInfo: {
    first_name: string;
    second_name: string;
    avatar: string;
    email: string;
    login: string;
    phone: string;
    display_name: string;
    old_password: string;
    new_password: string;
    second_new_password: string;
  };
  profileError: { [key in SPEC_NAME]?: string };
  handleChangeSearch(e: Event): void;
  handleChangeActiveChat(id: number): void;
  handleChangeMessage: JSX.EventHandler;
  handleSubmitMessage: JSX.EventHandler;
  handleChangeFields: JSX.EventHandler;
  handleSubmitFields: JSX.EventHandler;
}

export class ChatsPageBase extends Block<ChatsPageProps, ChatsState> {
  constructor(props: ChatsPageProps) {
    super(props);
  }

  init() {
    this.state = this._setState({
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
  }

  render() {
    return Chats({
      ...this.props,
      ...this.state,
      handleChangeSearch: this.handleChangeSearch,
      handleChangeActiveChat: this.handleChangeActiveChat,
      handleChangeMessage: this.handleChangeMessage,
      handleSubmitMessage: this.handleSubmitMessage,
      handleChangeFields: this.handleChangeFields,
      handleSubmitFields: this.handleSubmitFields,
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
}

export default ChatsPageBase;

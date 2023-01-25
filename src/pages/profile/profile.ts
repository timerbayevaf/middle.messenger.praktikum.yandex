import { AIcreateElement } from 'core';
import { Block } from 'core';
import { checkCorrectField, isSpecName } from 'utils/regexp';
import BaseProfile from 'modules/profile/profile';
import { CHATLIST_VIEW } from 'constants';
import { IUser } from 'types';

interface ProfileProps {
  isShow: boolean;
  viewType: CHATLIST_VIEW;
}

interface ProfileState extends Pick<AllProfileProps, 'user' | 'error'> {}

interface AllProfileProps {
  user: IUser;
  error: Pick<
    IUser,
    'first_name' | 'second_name' | 'email' | 'phone' | 'login'
  >;
  isShow: boolean;
  viewType: CHATLIST_VIEW;
  handleChange(e: Event): void;
  handleSubmit(e: Event): void;
}

class Profile extends Block<ProfileProps> {
  private state: ProfileState;

  constructor(props: ProfileProps) {
    super(props);
    this.state = this.setState({
      user: {
        first_name: '',
        avatar: '',
        second_name: '',
        email: '',
        phone: '',
        login: '',
      },
      error: {
        first_name: '',
        second_name: '',
        email: '',
        phone: '',
        login: '',
      },
    });
  }

  render(): JSX.Element<AllProfileProps> {
    return BaseProfile(this.allProps());
  }

  allProps(): AllProfileProps {
    const props = {
      ...this.props,
      ...this.state,
      handleChange: this.handleChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
    };

    return props;
  }

  setState(state: ProfileState) {
    return new Proxy(state, {
      get: (target, prop: string) => {
        const value = target[prop as keyof ProfileState];
        return value;
      },
      set: (target, prop: string, value) => {
        const oldTarget = { ...target };
        target[prop as keyof ProfileState] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Отказано в доступе');
      },
    });
  }

  handleChange(e: Event): void {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement)?.value?.trim();

    if (isSpecName(name) && name === 'first_name') {
      const { result: isCorrect, error } = checkCorrectField(name, value);

      this.state.user[name] = value;

      if (isCorrect) {
        this.state.error = {
          ...this.state.error,
          [name]: '',
        };
      } else {
        this.state.error = {
          ...this.state.error,
          [name]: error,
        };
      }
    }
  }

  handleSubmit(e: Event): void {
    e.preventDefault();

    // let isOk = true;

    //   SPEC_NAMES.filter(isSpecName).forEach((name) => {
    //     const { result, error } = checkCorrectField(name, this.state[name]);

    //     if (!result) {
    //       isOk = result;
    //       this.state.error = {
    //         ...this.state.error,
    //         [name]: error,
    //       };
    //     }
    //   });

    //   if (isOk) {
    //     console.log(this.state);
    //   }
  }
}

export default Profile;

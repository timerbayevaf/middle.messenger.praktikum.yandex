import { AIcreateElement } from 'core';
import Signup from 'modules/signup/signup';
import { Block } from 'core';
import { checkCorrectField, isSpecName, SPEC_NAMES } from 'utils/regexp';

type SIGNUP_SPEC_TYPE =
  | 'login'
  | 'email'
  | 'first_name'
  | 'second_name'
  | 'phone'
  | 'password'
  | 'second_password';

interface SignupPageProps {}

interface SignupPageState
  extends Pick<
    SignupProps,
    | 'first_name'
    | 'second_name'
    | 'email'
    | 'phone'
    | 'login'
    | 'password'
    | 'second_password'
    | 'error'
  > {}

interface SignupProps {
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
  login: string;
  password: string;
  second_password: string;
  error: Pick<
    SignupProps,
    | 'first_name'
    | 'second_name'
    | 'email'
    | 'phone'
    | 'login'
    | 'password'
    | 'second_password'
  >;
  handleChange(e: Event): void;
  handleSubmit(e: Event): void;
}

class SignupPage extends Block<SignupPageProps, SignupPageState> {
  constructor(props: SignupPageProps) {
    super(props);
  }

  _init(): void {
    this.state = this._setState({
      first_name: '',
      second_name: '',
      email: '',
      phone: '',
      login: '',
      password: '',
      second_password: '',
      error: {
        first_name: '',
        second_name: '',
        email: '',
        phone: '',
        login: '',
        password: '',
        second_password: '',
      },
    });
  }

  render() {
    return Signup(this.allProps());
  }

  allProps(): SignupProps {
    const props = {
      ...this.props,
      ...this.state,
      handleChange: this.handleChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
    };

    return props;
  }

  handleChange(e: Event): void {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement)?.value?.trim();

    if (isSpecName<SIGNUP_SPEC_TYPE>(name) && name !== 'second_password') {
      const { result: isCorrect, error } = checkCorrectField(name, value);

      this.state[name] = value;

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
    } else if (name === 'second_password') {
      const isCorrect = this.state.password === value;
      this.state[name] = value;

      if (isCorrect) {
        this.state.error = {
          ...this.state.error,
          [name]: '',
        };
      } else {
        this.state.error = {
          ...this.state.error,
          [name]: `Пароли не совпадают`,
        };
      }
    }
  }

  handleSubmit(e: Event): void {
    e.preventDefault();

    let isOk = true;

    SPEC_NAMES.filter(isSpecName<SIGNUP_SPEC_TYPE>).forEach((name) => {
      const { result, error } = checkCorrectField(name, this.state[name]);

      if (!result) {
        isOk = result;
        this.state.error = {
          ...this.state.error,
          [name]: error,
        };
      }
    });

    if (isOk) {
      console.log(this.state);
    }
  }
}

export default SignupPage;

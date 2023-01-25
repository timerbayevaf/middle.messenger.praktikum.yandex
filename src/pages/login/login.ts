import { AIcreateElement } from 'core';
import Login from 'modules/login/login';
import { Block } from 'core';
import { checkCorrectField, isSpecName } from 'utils/regexp';

type LOGIN_SPEC_TYPE = 'login' | 'password';

interface LoginPageProps {}

interface LoginPageState
  extends Pick<LoginProps, 'login' | 'password' | 'error'> {}

interface LoginProps {
  login: string;
  password: string;
  error: { login: string; password: string };
  handleChange(e: Event): void;
  handleSubmit(e: Event): void;
}

class LoginPage extends Block<LoginPageProps, LoginPageState> {
  constructor(props: LoginPageProps) {
    super(props);
  }

  init(): void {
    this.state = this._setState({
      login: '',
      password: '',
      error: { login: '', password: '' },
    });
  }

  render() {
    return Login(this.allProps());
  }

  allProps(): LoginProps {
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
    const value = (e.target as HTMLInputElement)?.value;

    if (isSpecName<LOGIN_SPEC_TYPE>(name)) {
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
    }
  }

  handleSubmit(e: Event): void {
    e.preventDefault();

    const { result: isCorrectLogin, error: loginError } = checkCorrectField(
      'login',
      this.state.login
    );
    const { result: isCorrectPassword, error: passwordError } =
      checkCorrectField('password', this.state.password);

    if (isCorrectLogin && isCorrectPassword) {
      console.log({ login: this.state.login, password: this.state.password });
    }

    if (!isCorrectLogin) {
      this.state.error = {
        ...this.state.error,
        login: loginError,
      };
    }

    if (!isCorrectPassword) {
      this.state.error = {
        ...this.state.error,
        password: passwordError,
      };
    }
  }
}

export default LoginPage;

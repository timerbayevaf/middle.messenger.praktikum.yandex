import { connect } from 'core';
import Login from 'modules/login/login';
import { Block } from 'core';
import userController from 'controllers/user';
import { validateLoginRules } from 'constants';
import { AppState } from 'types';
import { checkCorrectField, validateFields } from 'utils/validate';
import { LoginPageProps, LoginPageState, LOGIN_SPEC_TYPE } from './types';
import { isSpecName } from 'utils/spec';

const isUserLoginSpecName = isSpecName<LOGIN_SPEC_TYPE>(validateLoginRules);
const userLoginValidator = validateFields(validateLoginRules);

class LoginPage extends Block<LoginPageProps, LoginPageState> {
  constructor(props: LoginPageProps) {
    super(props);
  }

  init(): void {
    this.state = this.setState({
      login: '',
      password: '',
      error: { login: '', password: '' },
    });
  }

  componentdidUnmount(): void {
    this.state = {
      login: '',
      password: '',
      error: { login: '', password: '' },
    };
  }
  render() {
    return Login({
      ...this.state,
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
    });
  }

  handleChange(e: Event): void {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement)?.value;

    if (isUserLoginSpecName(name)) {
      const validateData = checkCorrectField(name, value);

      if (validateData) {
        this.state.error = {
          ...this.state.error,
          [name]: validateData,
        };
      } else {
        this.state.error = {
          ...this.state.error,
          [name]: '',
        };
      }

      this.state[name] = value;
    }
  }

  handleSubmit(e: Event): void {
    e.preventDefault();

    const userInfo = {
      login: this.state.login,
      password: this.state.password,
    };

    const validateData = userLoginValidator(userInfo);

    if (validateData.isCorrect) {
      userController.login(userInfo);
    } else {
      this.state.error = {
        ...this.state.error,
        ...validateData.errors,
      };
    }
  }
}

function mapUserToProps(state: AppState): LoginPageProps {
  return {
    errorMessage: state.errorMessage,
  };
}

export default connect<LoginPageProps>(LoginPage, mapUserToProps);

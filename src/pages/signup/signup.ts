import Signup from 'modules/signup/signup';
import { Block, connect } from 'core';
import {
  SignupPageProps,
  SignupPageState,
  SignupProps,
  SIGNUP_SPEC_TYPE,
} from './types';
import loginController from 'controllers/user';
import { checkCorrectField, validateFields } from 'utils/validate';
import { isSpecName } from 'utils/specs';
import { validateSignUpRules, ValidateType } from 'constant';
import { AppState } from 'types';

const validateSignUpRulesWithNewPassword = [
  ...validateSignUpRules,
  ValidateType.NewPassword,
];

const isUserSignUpSpecName = isSpecName<SIGNUP_SPEC_TYPE>(
  validateSignUpRulesWithNewPassword
);
const userSignUpValidator = validateFields(validateSignUpRulesWithNewPassword);

class SignupPage extends Block<SignupPageProps, SignupPageState> {
  constructor(props: SignupPageProps) {
    super(props);
  }

  init(): void {
    this.state = this.setState({
      first_name: '',
      second_name: '',
      email: '',
      phone: '',
      login: '',
      password: '',
      newPassword: '',
      error: {
        first_name: '',
        second_name: '',
        email: '',
        phone: '',
        login: '',
        password: '',
        newPassword: '',
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

    if (isUserSignUpSpecName(name)) {
      const validateData = checkCorrectField(name, value);

      if (validateData) {
        this.state.error = { ...this.state.error, [name]: validateData };
      } else {
        this.state.error = { ...this.state.error, [name]: '' };
      }

      if (name === ValidateType.NewPassword && !validateData) {
        const isCorrect = this.state.password === value;
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

      this.state[name] = value;
    }
  }

  handleSubmit(e: Event): void {
    e.preventDefault();

    const userInfo = {
      login: this.state.login,
      password: this.state.password,
      first_name: this.state.first_name,
      second_name: this.state.second_name,
      email: this.state.email,
      phone: this.state.phone,
      newPassword: this.state.newPassword,
    };

    const validateData = userSignUpValidator(userInfo);

    if (validateData.isCorrect) {
      this.state.error = {};
      loginController.signup(userInfo);
    } else {
      this.state.error = {
        ...this.state.error,
        ...validateData.errors,
      };
    }
  }
}

function mapUserToProps(state: AppState): SignupPageProps {
  return {
    errorMessage: state.errorMessage,
  };
}

export default connect<SignupPageProps>(SignupPage, mapUserToProps);

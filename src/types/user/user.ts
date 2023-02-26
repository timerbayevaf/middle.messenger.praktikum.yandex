interface IUserDTO {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string | null;
  login: string;
  email: string;
  phone: string;
  avatar: string | null;
}

type SignInUserModel = {
  login: string;
  password: string;
};

type ISignUpUserModel = {
  login: string;
  password: string;
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
};

type IChangeUserModel = {
  login: string;
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
};

type IChangeUserPasswordModel = {
  oldPassword: string;
  newPassword: string;
};

export {
  type IUserDTO,
  SignInUserModel,
  ISignUpUserModel,
  IChangeUserPasswordModel,
  IChangeUserModel,
};

export type SignUpFormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
  rememberMe: boolean;
};

export type LoginFormType = {
  email: string;
  password: string;
};

export type IUser = {
  accountType: 'user' | 'company';
  userInfo: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  birthday: string;
  date: string;
  companyname: string;
  about: {
    headline: string;
    category: string;
    overview: string;
  };
};

export interface IAuth extends Partial<IUser> {
  userId: string;
  userToken: string;
  emailOrPhone: string;
  confirmPassword: string;
  token: string;
  activationToken: string | undefined;
  activationCode: string;
}

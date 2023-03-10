import ILogin from './ILogin';

export default interface ILoginServices {
  LoginValidation(username: string): Promise<ILogin | null>
}

import { ModelStatic } from 'sequelize';
import ILoginServices from '../interfaces/ILoginService';
import UserModel from '../database/models/UsersModel';

export default class Login implements ILoginServices {
  protected model: ModelStatic<UserModel> = UserModel;

  async LoginValidation(username: string): Promise<UserModel | null> {
    const user = this.model.findOne({ where: { email: username } });
    return user;
  }
}

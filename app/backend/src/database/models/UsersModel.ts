import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Users extends Model {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

Users.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
    allowNull: false,
  },

  username: {
    field: 'username',
    type: STRING,
    allowNull: false,
  },

  role: {
    field: 'role',
    type: STRING,
    allowNull: false,
  },

  email: {
    field: 'email',
    type: STRING,
    allowNull: false,
  },

  password: {
    field: 'password',
    type: STRING,
    allowNull: false,
  },
}, {
  // ... Outras configs
  modelName: 'users',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

export default Users;

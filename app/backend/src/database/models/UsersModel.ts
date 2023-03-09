import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Users extends Model {
  declare id: number;
  declare teamName: string;
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

/**
  * `Workaround` para aplicar as associations em  TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Users;

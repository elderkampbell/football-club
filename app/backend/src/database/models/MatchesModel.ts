import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Teams from './TeamsModel';

class Matches extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matches.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
    allowNull: false,
  },

  : {
    field: 'home_team_id',
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'teams',
      key: 'id',
    },
  },

  homeTeamGoals: {
    field: 'home_team_goals',
    type: INTEGER,
    allowNull: false,
  },

  awayTeamId: {
    field: 'away_team_id',
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'teams',
      key: 'id',homeTeamId
    },
  },

  awayTeamGoals: {
    field: 'away_team_goals',
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    field: 'in_progress',
    type: BOOLEAN,
    allowNull: false,
  },

}, {
  // ... Outras configs
  modelName: 'matches',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

Teams.hasMany(Matches, { foreignKey: 'homeTeamId' });
Teams.hasMany(Matches, { foreignKey: 'awayTeamId' });
Matches.belongsTo(Teams, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeamId', as: 'awayTeam' });

export default Matches;

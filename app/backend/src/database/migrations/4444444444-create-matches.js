module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },

      homeTeamId: {
        field: 'home_team_id',
        type: INTEGER,
        allowNull: false,
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
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};

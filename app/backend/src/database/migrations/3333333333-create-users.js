module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },

      userName: {
        field: 'username',
        type: Sequelize.STRING,
        allowNull: false,
      },

      role: {
        field: 'role',
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        field: 'email',
        type: Sequelize.STRING,
        allowNull: false,
      },

      password: {
        field: 'password',
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('teams');
  },
};

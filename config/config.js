import 'dotenv/config';

export default {
  development: {
    storage: 'db.sqlite',
    dialect: 'sqlite',
    seederStorage: 'sequelize',
    define: {
      freezeTableName: true,
      paranoid: true,
      underscored: true,
      timestamps: true,
    },
  },
};

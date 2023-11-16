import { Sequelize, DataTypes } from 'sequelize';
import Act from './act.js';
import Beat from './beat.js';
import Beatsheet from './beatsheet.js';

const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
import config from '../../config/config.js';

const { database, username, password, ...options } = config[env];

export const sequelize = new Sequelize(database, username, password, options);

const models = {
    beats: Beat(sequelize, DataTypes),
    acts: Act(sequelize, DataTypes),
    beatsheets: Beatsheet(sequelize, DataTypes)
};

Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));

await sequelize.sync();
export default {
    ...models,
    sequelize
};
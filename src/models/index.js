import { Sequelize, DataTypes } from 'sequelize';
import Act from './act.js';
import Beat from './beat.js';
import BeatSheet from './beatsheet.js';

const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
import config from '../../config/config.js';

export const sequelize = new Sequelize(config[env]);

const models = {
    beats: Beat(sequelize, DataTypes),
    acts: Act(sequelize, DataTypes),
    beatSheets: BeatSheet(sequelize, DataTypes)
};

Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));

await sequelize.sync();
export default {
    ...models,
    sequelize
};
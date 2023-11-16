import _ from 'lodash';
import act from'./act.js';
import beat from'./beat.js';
import beatsheet from'./beatsheet.js';

const resolvers = _.merge(
  act,
  beat,
  beatsheet,
);

export default resolvers;

import _ from 'lodash';
import act from'./act.js';
import beat from'./beat.js';

const resolvers = _.merge(
  act,
  beat,
);

export default resolvers;

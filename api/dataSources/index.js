import Act from'./act.js';
import Beat from'./beat.js';
import Beatsheet from './beatsheet.js';

const dataSources = () => ({
  Act: new Act(),
  Beat: new Beat(),
  Beatsheet: new Beatsheet(),
});

export default dataSources;
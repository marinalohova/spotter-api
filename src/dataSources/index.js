import Act from'./act.js';
import Beat from'./beat.js';

const dataSources = () => ({
  Act: new Act(),
  Beat: new Beat()
});

export default dataSources;
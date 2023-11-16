import { DataSource } from 'apollo-datasource';

class Beatsheet extends DataSource {
  async initialize({ context: { db } }) {
    this.db = db;
  }

  /**
   * List BeatSheets
   * @param {Object} input: { }
   * @return {Promise<Object>}
  */
  async listBeatsheets(input) {
    const result = await this.db.beatsheets.findAndCountAll(
        { include: [{ model:this.db.acts,include: [this.db.beats] }] });

    return result;
  }

  /**
   * Get Beatsheet
   * @param {Object} input: { }
   * @return {Promise<Object>}
   */
  async getBeatsheet({ id }) {
    return this.db.beatsheets.findOne({
      where: { id },
      include: [{ model: this.db.acts,
        include:[this.db.beats] }],
      order: [
        [ this.db.acts, 'id', 'DESC' ],
        [ this.db.acts, this.db.beats, 'id', 'DESC' ]]
    });
  }

  /**
   * Update Beatsheet
   * @param {Object} input: { }
   * @return {Promise<Object>}
   */
  async updateBeatsheet({ acts, ...rest}) {

    const beatsheet = await this.getBeatsheet(rest);

    const updatedActs = acts.map((act, index) => {
      const existing = beatsheet.acts[index];
      if (existing) {
        const updatedBeats = act.beats && act.beats.length > 0 && act.beats.map((beat, index) => {
          if (existing.beats[index]) {
            return { id: existing.beats[index].id, ...beat, actId: existing.id };
          }
          return { ...beat,  actId: existing.id };
        })
        return { id: existing.id, ...act, beatsheetId: beatsheet.id, beats: updatedBeats };
      }
      return { ...act, beatsheetId: beatsheet.id };
    })
    await this.db.acts.bulkCreate(updatedActs,  {
      updateOnDuplicate: ['description'],
      include: [{ association: this.db.acts.Beats, updateOnDuplicate: ['title', 'description', 'duration', 'cameraAngle'] }],
    });
    return beatsheet.reload();
  }
}

export default Beatsheet;

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
    const result = await this.db.beatsheets.findAndCountAll({
      include: [{ model: this.db.acts, include: [this.db.beats] }],
      order: [
            [ this.db.acts, 'id', 'ASC' ],
            [ this.db.acts, this.db.beats, 'id', 'ASC' ]] });

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
        [ this.db.acts, 'id', 'ASC' ],
        [ this.db.acts, this.db.beats, 'id', 'ASC' ]]
    });
  }

  /**
   * Update Beatsheet
   * @param {Object} input: { }
   * @return {Promise<Object>}
   */
  async updateBeatsheet({acts, id }) {

    const beatsheet = await this.db.beatsheets.findOne({
      where: { id },
      paranoid: false,
      include: [{ model: this.db.acts,
        paranoid: false,
        include:[{ model: this.db.beats, paranoid: false }] }],
      order: [
        [ this.db.acts, 'id', 'ASC' ],
        [ this.db.acts, this.db.beats, 'id', 'ASC' ]]
    });

    const existingActs = (beatsheet.acts || []).map(({ dataValues: act }) => { return { ...act, deletedAt: new Date() }; });
    const updatedActs = acts.reduce((memo, act, index) => {
      const existingAct = existingActs[index];
      if (existingAct) {
        const existingBeats = (existingAct.beats || []).map(({ dataValues: beat }) => { return { ...beat, deletedAt: new Date() }; });
        const updatedBeats = (act.beats || []).reduce((memo, beat, index) => {
          const existingBeat = existingBeats[index];
          if (existingBeat) {
            const { deletedAt, ...item } = { ...existingBeat, ...beat }
            memo.splice(index, 1, item);
            return memo;
          }
          return [...memo, { ...beat, actId: existingAct.id, }];
        }, existingBeats);
        const { deletedAt, ...item } = { ...existingAct, ...act, beats: updatedBeats };
        memo.splice(index, 1, item);
        return memo;
      }
      return [...memo, { ...act, beatsheetId: beatsheet.id }];
    }, existingActs);
    await this.db.acts.bulkCreate(updatedActs,  {
      updateOnDuplicate: ['description', 'deletedAt'],
      include: [{ association: this.db.acts.Beats, updateOnDuplicate: ['title',
          'description', 'duration', 'cameraAngle', 'deletedAt'] }],
    });
  }
}

export default Beatsheet;

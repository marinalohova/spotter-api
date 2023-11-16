import { DataSource } from'apollo-datasource';

class Beat extends DataSource {
  async initialize({ context: { db } }) {
    this.db = db;
  }

  /**
   * Create beat
   * @param {Object} input: { }
   * @return {Promise<Object>}
   */
  async createBeat(input) {
    return this.db.beats.create(input);
  }

  /**
   * Update beat
   * @param {Object} input: { }
   * @return {Promise<Object>}
   */
  async updateBeat({ id, ...input }) {
    const beat = await this.db.beats.findOne( { where: { id }, rejectOnEmpty: true },);
    return beat.update(input);
  }

  /**
   * Delete beat
   * @param {Object} input: { }
   * @return {Promise<Object>}
   */
  async deleteBeat({ id }) {
    return this.db.beats.destroy({ where: { id }});
  }
}

export default Beat;

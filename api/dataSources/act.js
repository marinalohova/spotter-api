import { DataSource } from 'apollo-datasource';

class Act extends DataSource {
  async initialize({ context: { db } }) {
    this.db = db;
  }

  /**
   * List acts
   * @param {Object} input: { }
   * @return {Promise<Object>}
  */
  async listActs(input) {
    const result = await this.db.acts.findAndCountAll({ include: this.db.beats });

    return result;
  }

  /**
   * Get act
   * @param {Object} input: { }
   * @return {Promise<Object>}
   */
  async getAct({ id }) {

    return this.db.acts.findOne({ where: { id }, include: this.db.beats, rejectOnEmpty: true });
  }

  /**
   * Create act
   * @param {Object} input: { }
   * @return {Promise<Object>}
   */
  async createAct(act) {
    return this.db.acts.create(act, {
      include: [this.db.acts.Beats]
    });
  }

  /**
   * Delete act
   * @param {Object} input: { }
   * @return {Promise<Object>}
   */
  async deleteAct({ id }) {
    return this.db.acts.destroy({ where: { id }});
  }
}

export default Act;

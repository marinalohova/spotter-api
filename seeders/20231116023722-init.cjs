'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('acts', [
      {
        id: 1,
        description: 'Act 1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        description: 'Act 2',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);

    await queryInterface.bulkInsert('beats', [
      {
        title: 'Intro',
        description: 'Brief introduction of the host (the influencer) and the topic of the video.',
        act_id: 1,
        duration: 15,
        camera_angle: 'POV',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Title/Opening Credits',
        description: 'The opening title or credits for the video.',
        act_id: 1,
        duration: 15,
        camera_angle: 'CU',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('acts');
  }
};

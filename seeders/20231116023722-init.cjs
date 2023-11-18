'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('beatsheets', [
      {
        id: 1,
        title: 'My First Beatsheet'
      },
      {
        id: 2,
        title: 'Unboxing New Shoes'
      },
    ]);
    await queryInterface.bulkInsert('acts', [
      {
        id: 1,
        beatsheet_id: 1,
        description: 'Act 1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        beatsheet_id: 1,
        description: 'Act 2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        beatsheet_id: 2,
        description: 'First Act',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);

    await queryInterface.bulkInsert('beats', [
      {
        title: 'Intro',
        description: 'Brief introduction of the host (the influencer) and the topic of the video.',
        act_id: 1,
        duration: '00:00-00:15',
        camera_angle: 'POV',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Title/Opening Credits',
        description: 'The opening title or credits for the video.',
        act_id: 1,
        duration: '00:15-00:45',
        camera_angle: 'CU',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Advertisement',
        description: 'Introduce one of our affiliate products and services',
        act_id: 2,
        duration: '00:45-01:45',
        camera_angle: 'LS',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Introduction",
        description: "Channel slate and greetings",
        act_id: 3,
        duration: '00:00-00:30',
        camera_angle: "Pan",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Unboxing",
        description: "Open the box and create an air of mystery",
        act_id: 3,
        duration: '00:30-01:30',
        camera_angle: "Zoom",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Paid Promotion",
        description: "Introduce the product from one of the partners",
        act_id: 3,
        duration: '01:30-01:55',
        camera_angle: "Tilt",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('acts');
  }
};

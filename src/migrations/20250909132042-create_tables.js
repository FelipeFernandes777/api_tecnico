'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('leads', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        fullerName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        areaOfInterest: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        enterprise_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    })

      await queryInterface.createTable('enterprises', {
          id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          active: {
              type: Sequelize.BOOLEAN,
              allowNull: false,
              defaultValue: true,
          }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('leads')
  }
};

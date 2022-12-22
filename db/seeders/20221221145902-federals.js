/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Federals', [{
      name: 'Центральный',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Северо-Западный',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Южный',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Северо-Кавказский',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Приволжский',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Уральский',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Сибирский',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Дальневосточный',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

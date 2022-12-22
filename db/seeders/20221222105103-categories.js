/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      name: 'Социальная защита',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Транспорт и дороги',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Образование и наука',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Здравоохранение',
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

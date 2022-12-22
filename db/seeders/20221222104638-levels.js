/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Levels', [{
      name: 'Федеральный',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Региональный',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Муниципалитет',
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

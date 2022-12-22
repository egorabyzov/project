/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Regions', [{
      name: 'Белгородская область',
      federalId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Город федерального значения Москва',
      federalId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Республика Карелия',
      federalId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Республика Коми',
      federalId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Республика Адыгея',
      federalId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: ' Республика Крым',
      federalId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Республика Дагестан',
      federalId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Республика Ингушетия',
      federalId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Республика Башкортостан',
      federalId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Республика Марий Эл',
      federalId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Свердловская область',
      federalId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Тюменская область',
      federalId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Республика Алтай',
      federalId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Республика Тыва',
      federalId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Республика Бурятия',
      federalId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Камчатский край',
      federalId: 8,
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

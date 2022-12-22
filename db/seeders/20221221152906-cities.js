/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [{
      name: 'Белгород',
      regionId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Москва',
      regionId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Петрозаводск',
      regionId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Сыктывкар',
      regionId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Майкоп',
      regionId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Крым',
      regionId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Махачкала',
      regionId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Назрань',
      regionId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Уфа',
      regionId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Йошкар-Ола',
      regionId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Нижний Тагил',
      regionId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Тюмень',
      regionId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Барнаул',
      regionId: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Кызыл',
      regionId: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Улан-Удэ',
      regionId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Елизово',
      regionId: 16,
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

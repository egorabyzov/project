/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      surname: 'gh',
      name: 'John Doe',
      patronymic: 'vhgn',
      email: 'fhgjh',
      password: '12',
      federal: 'sgh',
      region: 'dfb',
      city: '13',
      createdAt: new Date(),
      updatedAt: new Date(),

    }, {

      surname: 'gh',
      name: 'John Doe',
      patronymic: 'vhgn',
      email: 'fhgjh',
      password: '12',
      federal: 'sgh',
      region: 'dfb',
      city: '13',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {

      surname: 'gh',
      name: 'John Doe',
      patronymic: 'vhgn',
      email: 'fhgjh',
      password: '12',
      federal: 'sgh',
      region: 'dfb',
      city: '13',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {

      surname: 'gh',
      name: 'John Doe',
      patronymic: 'vhgn',
      email: 'fhgjh',
      password: '12',
      federal: 'sgh',
      region: 'dfb',
      city: '13',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {

      surname: 'gh',
      name: 'John Doe',
      patronymic: 'vhgn',
      email: 'fhgjh',
      password: '12',
      federal: 'sgh',
      region: 'dfb',
      city: '13',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {

      surname: 'gh',
      name: 'John Doe',
      patronymic: 'vhgn',
      email: 'fhgjh',
      password: '12',
      federal: 'sgh',
      region: 'dfb',
      city: '13',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {

      surname: 'gh',
      name: 'John Doe',
      patronymic: 'vhgn',
      email: 'fhgjh',
      password: '12',
      federal: 'sgh',
      region: 'dfb',
      city: '13',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Users', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};

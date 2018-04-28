
exports.seed = function(knex, Promise) {
  return knex('category').del()
    .then(function () {
      return knex('category').insert([
        {name: 'Webdesign', description: 'Web design (HTML/CSS)'},
        {name: 'NodeJS', description: 'Backend programming using Node JS'},
        {name: 'Database', description: 'Database design and optimization (MySQL)'},
        {name: 'Architecture', description: 'System design' },
      ]);
    });
};

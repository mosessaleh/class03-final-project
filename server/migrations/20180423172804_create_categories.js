
exports.up = function(knex, Promise) {
   return knex.schema.createTable('category',
     function (t) {
        t.increments('id').unsigned().primary();
        t.string('name').notNull();
        t.string('description').notNull();
    });  
};

exports.down = function(knex, Promise) {
   return knex.dropTable('category'); 
};

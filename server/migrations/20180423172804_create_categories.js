
exports.up = function(knex, Promise) {
   return 
   knex.schema.createTable('categories',
     function (t) {
        t.increments('id').unsigned().primary();
        t.string('name').notNull();
        t.string('toRoute').notNull();
    }); 
    knex.schema.createTable('contents',
     function (t) {
        t.increments('id').unsigned().primary();
        t.string('title');
        t.string('category');
        t.string('difficulty');
        t.string('type');
        t.string('link');
        t.text('description');
        t.increments('addDate').notNull().defaultTo('000000');
        t.increments('voteUp').notNull().defaultTo('0');
        t.increments('voteDown').notNull().defaultTo('0');
        t.increments('readed').notNull().defaultTo('0');
    });   
};

exports.down = function(knex, Promise) {
   return knex.dropTable('category'); 
};

exports.up = async function (knex, Promise) {
    await knex.schema.createTable('cpu', (table) => {
        table.increments();
        table.text('manufactor').notNullable();
        table.text('generation').notNullable();
        table.text('processor').notNullable();
        table.integer('cores').notNullable();
        table.decimal('frequency', 3).notNullable();
    });
};

exports.down = async function (knex, Promise) {
    await knex.schema.dropTableIfExists('cpu');
};

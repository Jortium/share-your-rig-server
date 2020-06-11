exports.up = async function (knex, Promise) {
    await knex.schema.createTable('gpus', (table) => {
        table.increments();
        table.integer('useridg').references('id').inTable('users');
        table.text('manufactor').notNullable();
        table.text('model').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = async function (knex, Promise) {
    await knex.schema.dropTableIfExists('gpus');
};

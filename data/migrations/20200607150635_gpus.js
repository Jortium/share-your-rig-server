exports.up = async function (knex, Promise) {
    await knex.schema.createTable('gpus', (table) => {
        table.increments();
        table.integer('user_id').references('id').inTable('users');
        table.text('manufacturer').notNullable();
        table.text('model').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = async function (knex, Promise) {
    await knex.schema.dropTableIfExists('gpus');
};

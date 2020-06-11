exports.up = async function (knex, Promise) {
    await knex.schema.createTable('cpus', (table) => {
        table.increments();
        table.integer('useridc').references('id').inTable('users');
        table.text('manufactor').notNullable();
        table.text('model').notNullable();
        table.integer('cores').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = async function (knex, Promise) {
    await knex.schema.dropTableIfExists('cpus');
};

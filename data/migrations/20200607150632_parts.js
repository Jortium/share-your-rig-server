exports.up = async function (knex, Promise) {
    await knex.schema.createTable('parts', (table) => {
        table.increments();
        table.integer('user_id').references('id').inTable('users');
        table.text('cpumanufacturer').notNullable();
        table.text('cpumodel').notNullable();
        table.integer('cpucores').notNullable();
        table.text('gpumanufacturer').notNullable();
        table.text('gpumodel').notNullable();
        table.integer('ram').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = async function (knex, Promise) {
    await knex.schema.dropTableIfExists('parts');
};

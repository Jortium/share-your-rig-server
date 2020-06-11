exports.up = async function (knex, Promise) {
    await knex.schema.createTable('gpu', (table) => {
        table.increments();
        table.text('company').notNullable();
        table.text('model').notNullable();
    });
};

exports.down = async function (knex, Promise) {
    await knex.schema.dropTableIfExists('gpu');
};

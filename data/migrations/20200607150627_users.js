exports.up = async function (knex, Promise) {
    await knex.schema.createTable('users', (table) => {
        table.increments();
        table.text('email').notNullable();
        table.text('username').notNullable();
        table.text('password').notNullable();
    });
};

exports.down = async function (knex, Promise) {
    await knex.schema.dropTableIfExists('users');
};

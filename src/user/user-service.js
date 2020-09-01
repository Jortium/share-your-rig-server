const UserService = {
    getUser(knex) {
        return knex.select('*').from('users');
    },
    getId(knex, id) {
        return knex.from('users').select('*').where('id', id).first();
    },
    postUser(knex, newUser) {
        return knex
            .insert(newUser)
            .into('users')
            .returning('*')
            .then((rows) => rows[0]);
    },
    deleteUser(knex, id) {
        return knex('users')
            .where({ id })
            .delete();
    },
    updateUser(knex, id, fixUser) {
        return knex('users')
            .where({ id })
            .update(fixUser);
    },
};

module.exports = UserService;

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(() =>
        // Inserts seed entries
            knex('users').insert([
                { email: 'testemail@test.com', username: 'testuser', password: 'guest' },
            ]));
};

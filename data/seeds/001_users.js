exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(() =>
        // Inserts seed entries
            knex('users').insert([
                { email: 'testemail@test.com', username: 'testuser1', password: 'guest' },
                { email: 'testemail@test.com', username: 'testuser2', password: 'guest' },
                { email: 'testemail@test.com', username: 'testuser3', password: 'guest' },
                { email: 'testemail@test.com', username: 'testuser4', password: 'guest' },
                { email: 'testemail@test.com', username: 'testuser5', password: 'guest' },
                { email: 'testemail@test.com', username: 'testuser6', password: 'guest' },
                { email: 'testemail@test.com', username: 'testuser7', password: 'guest' },
                { email: 'testemail@test.com', username: 'testuser8', password: 'guest' },
                { email: 'testemail@test.com', username: 'testuser9', password: 'guest' },
                { email: 'testemail@test.com', username: 'testuser10', password: 'guest' },
            ]));
};

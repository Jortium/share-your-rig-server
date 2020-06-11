exports.seed = function (knex) {
// Deletes ALL existing entries
    return knex('cpus').del()
        .then(() =>
        // Inserts seed entries
        // eslint-disable-next-line implicit-arrow-linebreak
            knex('cpus').insert([
                {
                    user_id: 1, manufacturer: 'Intel', model: 'i3-9350KF', cores: 4,
                },
                {
                    user_id: 2, manufacturer: 'Intel', model: 'i5-8500', cores: 6,
                },
                {
                    user_id: 3, manufacturer: 'Intel', model: 'i7-7700K', cores: 4,
                },
                {
                    user_id: 4, manufacturer: 'AMD', model: '1300X', cores: 4,
                },
                {
                    user_id: 5, manufacturer: 'AMD', model: 'FX-8170', cores: 8,
                },
                {
                    user_id: 6, manufacturer: 'AMD', model: 'Ryzen 7 PRO 3700', cores: 4,
                },
            ]));
};

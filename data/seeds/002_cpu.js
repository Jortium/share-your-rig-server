exports.seed = function (knex) {
// Deletes ALL existing entries
return knex('cpus').del()
 .then(() =>
   // Inserts seed entries
    // eslint-disable-next-line implicit-arrow-linebreak
    knex('cpus').insert([
               {
                    user_id: 1, manufactor: 'Intel', model: 'i3-9350KF', cores: 4,
                },
                {
                    user_id: 2, manufactor: 'Intel', model: 'i5-8500', cores: 6,
                },
                {
                    user_id: 3, manufactor: 'Intel', model: 'i7-7700K', cores: 4,
                },
                {
                    user_id: 4, manufactor: 'AMD', model: '1300X', cores: 4,
                },
                {
                    user_id: 5, manufactor: 'AMD', model: 'FX-8170', cores: 8,
                },
                {
                    user_id: 6, manufactor: 'AMD', model: 'Ryzen 7 PRO 3700', cores: 4,
                },
            ]));
};

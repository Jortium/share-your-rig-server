exports.seed = function (knex) {
// Deletes ALL existing entries
return knex('cpus').del()
 .then(() =>
   // Inserts seed entries
    // eslint-disable-next-line implicit-arrow-linebreak
    knex('cpus').insert([
               {
                    useridc: 1, manufactor: 'Intel', model: 'i3-9350KF', cores: 4,
                },
                {
                    useridc: 2, manufactor: 'Intel', model: 'i5-8500', cores: 6,
                },
                {
                    useridc: 3, manufactor: 'Intel', model: 'i7-7700K', cores: 4,
                },
                {
                    useridc: 4, manufactor: 'AMD', model: '1300X', cores: 4,
                },
                {
                    useridc: 5, manufactor: 'AMD', model: 'FX-8170', cores: 8,
                },
                {
                    useridc: 6, manufactor: 'AMD', model: 'Ryzen 7 PRO 3700', cores: 4,
                },
            ]));
};

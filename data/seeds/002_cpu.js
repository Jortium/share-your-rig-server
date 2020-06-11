exports.seed = function (knex) {
// Deletes ALL existing entries
return knex('cpu').del()
 .then(() =>
   // Inserts seed entries
    // eslint-disable-next-line implicit-arrow-linebreak
    knex('cpu').insert([
               {
                    manufactor: 'Intel', chipset: 'i3-9350KF', cores: 4, frequency: '4.00',
                },
                {
                    manufactor: 'Intel', chipset: 'i5-8500', cores: 6, frequency: '3.00',
                },
                {
                    manufactor: 'Intel', chipset: 'i7-7700K', cores: 4, frequency: '4.20',
                },
                {
                    manufactor: 'AMD', chipset: '1300X', cores: 4, frequency: '3.50',
                },
                {
                    manufactor: 'AMD', chipset: 'FX-8170', cores: 8, frequency: '3.90',
                },
                {
                    manufactor: 'AMD', chipset: '970', cores: 4, frequency: '4.20',
                },
            ]));
};


exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('gpus').del()
        .then(() =>
        // Inserts seed entries
            knex('gpus').insert([
                { user_id: 1, manufactor: 'Nvidia', model: 'GeForce GTX 770' },
                { user_id: 2, manufactor: 'Nvidia', model: 'GeForce GTX 980' },
                { user_id: 3, manufactor: 'Nvidia', model: 'GeForce RTX 2080 Ti' },
                { user_id: 4, manufactor: 'AMD', model: ' Radeon R9 290X' },
                { user_id: 5, manufactor: 'AMD', model: 'Radeon RX Vega 64' },
                { user_id: 6, manufactor: 'AMD', model: 'Radeon RX 5700 XT' },
            ]));
};

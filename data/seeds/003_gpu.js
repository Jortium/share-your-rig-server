
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('gpus').del()
        .then(() =>
        // Inserts seed entries
            knex('gpus').insert([
                { useridg: 1, manufactor: 'Nvidia', model: 'GeForce GTX 770' },
                { useridg: 2, manufactor: 'Nvidia', model: 'GeForce GTX 980' },
                { useridg: 3, manufactor: 'Nvidia', model: 'GeForce RTX 2080 Ti' },
                { useridg: 4, manufactor: 'AMD', model: ' Radeon R9 290X' },
                { useridg: 5, manufactor: 'AMD', model: 'Radeon RX Vega 64' },
                { useridg: 6, manufactor: 'AMD', model: 'Radeon RX 5700 XT' },
            ]));
};

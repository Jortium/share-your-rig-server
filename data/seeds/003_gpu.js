
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('gpu').del()
        .then(() =>
        // Inserts seed entries
            knex('gpu').insert([
                { manufactor: 'Nvidia', model: ' ' },
                { manufactor: 'Nvidia', model: ' ' },
                { manufactor: 'Nvidia', model: ' ' },
                { manufactor: 'AMD', model: ' ' },
                { manufactor: 'AMD', model: ' ' },
                { manufactor: 'AMD', model: ' ' },
            ]));
};

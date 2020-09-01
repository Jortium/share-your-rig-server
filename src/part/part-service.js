const PartService = {
    getPart(knex) {
        return knex.select('*').from('parts');
    },
    getId(knex, id) {
        return knex.from('parts').select('*').where('id', id).first();
    },
    postPart(knex, newPart) {
        return knex
            .insert(newPart)
            .into('parts')
            .returning('*')
            .then((rows) => rows[0]);
    },
    deletePart(knex, id) {
        return knex('parts')
            .where({ id })
            .delete();
    },
    updatePart(knex, id, fixPart) {
        return knex('parts')
            .where({ id })
            .update(fixPart);
    },
};

module.exports = PartService;

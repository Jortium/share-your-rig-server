const GPUService = {
    getGPU(knex) {
        return knex.select('*').from('gpus');
    },
    getId(knex, id) {
        return knex.from('gpus').select('*').where('id', id).first();
    },
    postGPU(knex, newGPU) {
        return knex
            .insert(newGPU)
            .into('gpus')
            .returning('*')
            .then((rows) => rows[0]);
    },
    deleteGPU(knex, id) {
        return knex('gpus')
            .where({ id })
            .delete();
    },
    updateGPU(knex, id, fixGPU) {
        return knex('gpus')
            .where({ id })
            .update(fixGPU);
    },
};

module.exports = GPUService;

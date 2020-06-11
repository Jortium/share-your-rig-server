const CPUService = {
    getCPU(knex) {
        return knex.select('*').from('cpus');
    },
    getId(knex, id) {
        return knex.from('cpus').select('*').where('id', id).first();
    },
    postCPU(knex, newCPU) {
        return knex
            .insert(newCPU)
            .into('cpus')
            .returning('*')
            .then((rows) => rows[0]);
    },
    deleteCPU(knex, id) {
        return knex('cpus')
            .where({ id })
            .delete();
    },
    updateCPU(knex, id, fixCPU) {
        return knex('cpus')
            .where({ id })
            .update(fixCPU);
    },
};

module.exports = CPUService;

const CPUService = {
    getFolders(knex) {
      return knex.select('*').from('cpu');
    },
    getId(knex, id) {
      return knex.from('cpu').select('*').where('id', id).first();
    },
    postFolder(knex, newCPU) {
      return knex
        .insert(newCPU)
        .into('cpu')
        .returning('*')
        .then((rows) => rows[0]);
    },
    deleteFolder(knex, id) {
      return knex('cpu')
        .where({ id })
        .delete();
    },
    updateFolder(knex, id, fixCPU) {
      return knex('cpu')
        .where({ id })
        .update(fixCPU);
    },
  };
  
  module.exports = CPUService;
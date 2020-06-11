const GPUService = {
    getFolders(knex) {
      return knex.select('*').from('gpu');
    },
    getId(knex, id) {
      return knex.from('gpu').select('*').where('id', id).first();
    },
    postFolder(knex, newGPU) {
      return knex
        .insert(newGPU)
        .into('gpu')
        .returning('*')
        .then((rows) => rows[0]);
    },
    deleteFolder(knex, id) {
      return knex('gpu')
        .where({ id })
        .delete();
    },
    updateFolder(knex, id, fixGPU) {
      return knex('gpu')
        .where({ id })
        .update(fixGPU);
    },
  };
  
  module.exports = GPUService;
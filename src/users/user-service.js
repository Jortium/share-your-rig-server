const UserService = {
    getFolders(knex) {
      return knex.select('*').from('users');
    },
    getId(knex, id) {
      return knex.from('users').select('*').where('id', id).first();
    },
    postFolder(knex, newFolder) {
      return knex
        .insert(newFolder)
        .into('users')
        .returning('*')
        .then((rows) => rows[0]);
    },
    deleteFolder(knex, id) {
      return knex('users')
        .where({ id })
        .delete();
    },
    updateFolder(knex, id, fixUser) {
      return knex('users')
        .where({ id })
        .update(fixUser);
    },
  };
  
  module.exports = UserService;
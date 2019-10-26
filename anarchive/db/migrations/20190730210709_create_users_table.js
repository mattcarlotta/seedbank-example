exports.up = function(knex) {
  return knex.schema.createTable('users', function (t) {
    t.increments('id').primary()
    t.string('username').notNullable()
    t.string('password').notNullable()
    t.timestamps(false, true)
  })
  .then(() => { console.log('created users table') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};

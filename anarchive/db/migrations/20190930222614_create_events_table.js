exports.up = function(knex) {
  return knex.schema.createTable('events', function (t) {
    t.increments('id').primary()
    t.timestamps(false, true)
    t.string('name').notNullable()
    t.string('data')
  })
  .then(() => { console.log('created events table') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events')
};

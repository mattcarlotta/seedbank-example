exports.up = function(knex) {
  return knex.schema.table('users', function(t) {
  	t.string('email').unique().notNullable()  	
  })
  .then(() => { console.log('added email to users') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.table('users', function(r) {
  	t.dropColumn('email')
  })
};

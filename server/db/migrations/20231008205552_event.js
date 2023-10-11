
exports.up = knex => {
    return knex.schema.createTable('event', t => {
      t.uuid('id').primary().default(knex.raw('gen_random_uuid()'));
      t.timestamps(true, true);
      t.uuid('user_id')
      t.string('type');
      t.string('timestamp');
      t.jsonb('details')
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTableIfExists('event');
  };
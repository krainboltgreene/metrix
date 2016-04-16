exports.up = (knex) => {
  return knex
    .schema
    .createExtensionIfNotExists("uuid-ossp")
}

exports.down = (knex) => {
  return knex
    .schema
    .dropExtensionIfExists("uuid-ossp")
}

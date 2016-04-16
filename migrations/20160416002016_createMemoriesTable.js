exports.up = (knex) => {
  return knex
    .schema
    .createTable("memories", (table) => {
      table.uuid("id").primary().notNullable().defaultTo(knex.raw("uuid_generate_v4()"))
      table.jsonb("data").notNullable().defaultTo("{}")
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now()).index()
    })
}

exports.down = (knex) => {
  return knex
    .schema
    .dropTable("memories")
}

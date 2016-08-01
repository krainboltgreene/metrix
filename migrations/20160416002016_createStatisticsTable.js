exports.up = (knex) => {
  return knex
    .schema
    .createTable("statistics", (table) => {
      table
        .uuid("id")
        .primary()
        .defaultTo(knex.raw("uuid_generate_v4()"))
      table
        .text("type")
        .notNullable()
      table
        .jsonb("data")
        .notNullable()
        .defaultTo("{}")
      table
        .timestamp("created_at")
        .notNullable()
        .defaultTo(knex.fn.now())
        .index()
    })
}

exports.down = (knex) => {
  return knex
    .schema
    .dropTable("statistics")
}

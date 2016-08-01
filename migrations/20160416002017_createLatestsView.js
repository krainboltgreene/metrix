const fs = require("fs")
const path = require("path")

exports.up = (knex) => {
  return knex.raw(fs.readFileSync(path.join(".", "sql", "latests.sql"), "utf8"))
}

exports.down = (knex) => {
  return knex.raw("DROP VIEW latests")
}

import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import knex from "knex"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "DATABASE_URL",
  "DATABASE_POOL_MINIMUM",
  "DATABASE_POOL_MAXIMUM",
  "NODE_ENV"
])

export default knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
  SSL: process.env.NODE_ENV === "production",
  pool: {
    min: process.env.DATABASE_POOL_MINIMUM,
    max: process.env.DATABASE_POOL_MAXIMUM
  }
})

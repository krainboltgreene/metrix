import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import knex from "knex"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "STORE_DATABASE_URL",
  "STORE_DATABASE_POOL_MINIMUM",
  "STORE_DATABASE_POOL_MAXIMUM",
  "NODE_ENV"
])

export default knex({
  client: "pg",
  connection: process.env.STORE_DATABASE_URL,
  SSL: process.env.NODE_ENV === "production",
  pool: {
    min: process.env.STORE_DATABASE_POOL_MINIMUM,
    max: process.env.STORE_DATABASE_POOL_MAXIMUM
  }
})

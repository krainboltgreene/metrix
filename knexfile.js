require("dotenv").load({silent: true})
require("require-environment-variables")([
  "STORE_DATABASE_URL",
  "STORE_DATABASE_POOL_MINIMUM",
  "STORE_DATABASE_POOL_MAXIMUM",
  "NODE_ENV"
])

const configuration = {
  client: "pg",
  connection: process.env.STORE_DATABASE_URL,
  pool: {
    min: process.env.STORE_DATABASE_POOL_MINIMUM,
    max: process.env.STORE_DATABASE_POOL_MAXIMUM
  },
  migrations: {
    tableName: "metaMigrations"
  }
}

exports.development = configuration
exports.production = configuration

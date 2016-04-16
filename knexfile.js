require("dotenv").load({silent: true})
require("require-environment-variables")([
  "DATABASE_URL",
  "DATABASE_POOL_MINIMUM",
  "DATABASE_POOL_MAXIMUM",
  "NODE_ENV"
])

const configuration = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  pool: {
    min: process.env.DATABASE_POOL_MINIMUM,
    max: process.env.DATABASE_POOL_MAXIMUM
  },
  migrations: {
    tableName: "metaMigrations"
  }
}

exports.development = configuration
exports.production = configuration

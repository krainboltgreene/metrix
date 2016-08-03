import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "NODE_ENV"
])

export default null

import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import {createClient} from "then-redis"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "NODE_ENV"
])

export default createClient()

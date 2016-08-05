import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import express from "express"
import cors from "cors"
import {join} from "path"
import {store} from "~/application/remote"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "API_PORT",
  "NODE_ENV"
])

const application = express()

application.use(cors())

application.get("/types", (request, response) => {
  return store
    .hgetall("types")
    .then((data) => response.json(data))
    .catch((error) => console.error(error))
})

application.get("/types/:slug", ({params}, response) => {
  return store
    .hgetall(params.slug)
    .then((data) => response.json(data))
    .catch((error) => console.error(error))
})

application.use(express.static(join("tmp")))
application.use("/", express.static(join("tmp", "index.html")))

application.listen(process.env.API_PORT, () => {
  return console.log(`Listening to ${process.env.API_PORT}`)
})

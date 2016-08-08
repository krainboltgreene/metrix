import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import express from "express"
import cors from "cors"
import {join} from "path"
import {map} from "ramda"
import {store} from "~/application/remote"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "API_PORT",
  "NODE_ENV"
])

const application = express()

application.use(cors())

application.get("/types", (request, response) => {
  return store.smembers("types")
    .then((data) => response.json(data))
    .catch((error) => console.error(error))
})

application.get("/types/:slug", ({params}, response) => {
  return store.keys(`${params.slug}/*`)
    .then(map((key) => store.get(key)))
    .then((promises) => Promise.all(promises))
    .then((data) => response.json(data))
    .catch((error) => console.error(error))
})

application.use(express.static("tmp"))
application.use("/", express.static(join("tmp", "index.html")))

application.listen(process.env.API_PORT, () => {
  return console.log(`Listening to ${process.env.API_PORT}`)
})

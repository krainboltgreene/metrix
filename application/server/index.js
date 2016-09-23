import {join} from "path"
import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import {map} from "ramda"
import {sortBy} from "ramda"
import {identity} from "ramda"

import {store} from "./remote"

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
    .then(sortBy(identity))
    .then((keys) => {
      return Promise
        .all([
          store.ttl(keys[0]),
          ...map((key) => store.get(key), keys)
        ])
        .then(([expiresAt, ...values]) => ({values, expiresAt}))
    })
    .then((data) => response.json(data))
    .catch((error) => console.error(error))
})

application.use(express.static("tmp"))
application.use("/", express.static(join("tmp", "index.html")))

application.listen(process.env.API_PORT, () => {
  return console.log(`Listening to ${process.env.API_PORT}`)
})

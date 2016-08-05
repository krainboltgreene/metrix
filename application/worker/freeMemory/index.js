import {freemem} from "os"
import {store} from "~/application/remote"

export default function freeMemory () {
  const updatedAt = new Date().toJSON()

  return store.hset("freeMemory", updatedAt, freemem())
    .then(() => store.hset("types", "freeMemory", updatedAt))
    .then(() => console.log("New freeMemory entry"))
    .catch(console.error)
}

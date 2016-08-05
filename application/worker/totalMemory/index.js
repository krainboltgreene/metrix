import {totalmem} from "os"
import {store} from "~/application/remote"

export default function totalMemory () {
  const updatedAt = new Date().toJSON()

  return store.hset("totalMemory", updatedAt, totalmem())
    .then(() => store.hset("types", "totalMemory", updatedAt))
    .then(() => console.log("New totalMemory entry"))
    .catch(console.error)
}

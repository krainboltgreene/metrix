import {totalmem} from "os"
import {freemem} from "os"
import {store} from "~/application/remote"

export default function usedMemory () {
  const total = totalmem()
  const free = freemem()
  const updatedAt = new Date().toJSON()

  return store.hset("usedMemory", updatedAt, total - free)
    .then(() => store.hset("types", "usedMemory", updatedAt))
    .then(() => console.log("New usedMemory entry"))
    .catch(console.error)
}

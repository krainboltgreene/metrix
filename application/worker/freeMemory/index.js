import {freemem} from "os"
import {write} from "~/application/library"
import {LAZY} from "~/application/library"

export default function freeMemory () {
  const updatedAt = new Date().toJSON()
  const type = "freeMemory"
  const key = `${type}/${updatedAt}`

  return write({type, key, value: freemem(), expire: LAZY})
}

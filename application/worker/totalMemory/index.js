import {totalmem} from "os"
import {write} from "~/application/library"
import {LAZY} from "~/application/library"

export default function totalMemory () {
  const updatedAt = new Date().toJSON()
  const type = "totalMemory"
  const key = `${type}/${updatedAt}`

  return write({type, key, value: totalmem(), expire: LAZY})
}

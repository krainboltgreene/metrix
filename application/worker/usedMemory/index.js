import {totalmem} from "os"
import {freemem} from "os"
import {write} from "~/application/library"
import {LAZY} from "~/application/library"

export default function usedMemory () {
  const updatedAt = new Date().toJSON()
  const type = "usedMemory"
  const key = `${type}/${updatedAt}`

  return write({type, key, value: totalmem() - freemem(), expire: LAZY})
}

import {totalmem} from "os"
import {freemem} from "os"
import {write} from "~/application/library"
import {SECOND} from "~/application/library"
import {MINUTE} from "~/application/library"

const type = "usedMemory"
const interval = SECOND / 2
const expire = MINUTE

export default function usedMemory () {
  return [
    () => write({type, value: totalmem() - freemem(), expire}),
    interval
  ]
}

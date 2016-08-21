import {freemem} from "os"
import {write} from "~/application/library"
import {SECOND} from "~/application/library"
import {MINUTE} from "~/application/library"

const type = "freeMemory"
const interval = SECOND / 2
const expire = MINUTE

export default function freeMemory () {
  return [
    () => write({type, value: freemem(), expire}),
    interval
  ]
}

import {freemem} from "os"
import write from "../write"
import {SECOND} from "../interval"
import {MINUTE} from "../interval"

const type = "freeMemory"
const interval = SECOND / 2
const expire = MINUTE

export default function freeMemory () {
  return [
    () => write({type, value: freemem(), expire}),
    interval
  ]
}

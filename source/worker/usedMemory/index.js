import {totalmem} from "os"
import {freemem} from "os"
import write from "../write"
import {SECOND} from "../interval"
import {MINUTE} from "../interval"

const type = "usedMemory"
const interval = SECOND / 2
const expire = MINUTE

export default function usedMemory () {
  return [
    () => write({type, value: totalmem() - freemem(), expire}),
    interval
  ]
}

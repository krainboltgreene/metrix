import {totalmem} from "os"
import write from "../write"
import {DAY} from "../interval"

const type = "totalMemory"
const interval = DAY
const expire = DAY * 2

export default function totalMemory () {
  return [
    () => write({type, value: totalmem(), expire}),
    interval
  ]
}

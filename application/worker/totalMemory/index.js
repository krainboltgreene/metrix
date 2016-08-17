import {totalmem} from "os"
import {write} from "~/application/library"
import {WEEK} from "~/application/library"

const type = "totalMemory"
const interval = WEEK
const expire = WEEK * 2

export default function totalMemory () {
  return [
    () => write({type, value: totalmem(), expire}),
    interval
  ]
}

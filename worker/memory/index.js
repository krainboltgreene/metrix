import {freemem} from "os"
import {totalmem} from "os"
import {store} from "~/remote"

export default function memory () {
  const total = totalmem()
  const free = freemem()

  return store("statistics")
    .insert({
      type: "memory",
      data: {
        used: total - free,
        usedPercent: ((total - free) / total).toFixed(2),
        free,
        freePercent: free / total,
        total
      }
    })
    .then(() => console.log("New memories record"))
    .catch(console.error)
}

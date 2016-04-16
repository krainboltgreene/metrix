import {freemem} from "os"
import {totalmem} from "os"
import {knex} from "~/remote"

export default () => {
  return knex("memories")
    .insert({
      data: {
        used: totalmem() - freemem(),
        free: freemem(),
        total: totalmem()
      }
    })
    .then(() => console.log("Published record"))
    .catch(console.log)
}

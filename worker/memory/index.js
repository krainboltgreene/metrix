import {freemem} from "os"
import {totalmem} from "os"
import {knex} from "~/remote"

knex("memories")
  .insert({
    data: {
      used: totalmem() - freemem(),
      free: freemem(),
      total: totalmem()
    }
  })
  .then(console.log)
  .catch(console.log)
  .then(process.exit)

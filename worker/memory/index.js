import {freemem} from "os"
import {totalmem} from "os"
import {rethinkdbdash} from "../../remote"

export default () => {
  return rethinkdbdash
    .table("memory")
    .insert({
      free: freemem(),
      total: totalmem()
    })
    .run()
}

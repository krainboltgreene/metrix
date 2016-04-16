import ago from "ago"
import {knex} from "~/remote"

export default () => {
  return Promise.all([
    knex("memories")
      .whereNotBetween("created_at", [new Date(ago(1, "minute")), new Date()])
      .delete()
  ])
  .then(() => console.log("Deleted extra records"))
  .catch(console.log)
}

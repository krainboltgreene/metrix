import ago from "ago"
import {store} from "~/remote"

const LIMIT = 5

export default function scrub () {
  return store("statistics")
    .whereNotBetween("created_at", [new Date(ago(LIMIT, "minute")), new Date()])
    .delete()
    .then(() => console.log("Deleted extra records"))
    .catch(console.error)
}

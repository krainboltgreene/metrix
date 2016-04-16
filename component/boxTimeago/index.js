import ago from "s-ago"
import {time} from "snabbdom-helpers"
import {p} from "snabbdom-helpers"

export default (date) => {
  return p({
    content: [
      "Last updated ",
      time({datetime: date, content: ago(date)})
    ]
  })
}

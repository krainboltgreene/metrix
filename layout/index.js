import {main} from "snabbdom-helpers"

import example from "./example"

export default (state) => {
  return main({
    selector: "#application.dashboards",
    content: [
      example(state)
    ]
  })
}

import {section} from "snabbdom-helpers"

import example from "./example"

export default (state) => {
  return section({
    selector: ".dashboards",
    content: [
      example(state)
    ]
  })
}

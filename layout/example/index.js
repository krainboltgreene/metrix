import {section} from "snabbdom-helpers"

import {memoryFree} from "../../component"
import {memoryUsed} from "../../component"
import {memoryTotal} from "../../component"

export default (state) => {
  return section({
    selector: ".dashboard.example",
    content: [
      memoryFree(state),
      memoryUsed(state),
      memoryTotal(state)
    ]
  })
}

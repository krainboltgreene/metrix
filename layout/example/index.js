import {section} from "snabbdom-helpers"

import {memoryFree} from "../../component"

export default (state) => {
  return section({
    selector: ".dashboard.example",
    content: [
      memoryFree(state),
      memoryFree(state),
      memoryFree(state)
    ]
  })
}

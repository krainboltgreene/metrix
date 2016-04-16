import {init} from "snabbdom"
import snabClass from "snabbdom/modules/class"
import snabProps from "snabbdom/modules/props"
import snabStyle from "snabbdom/modules/style"

import layout from "../layout"

const patch = init([
  snabClass,
  snabProps,
  snabStyle
])
const application = document.getElementById("application")
const state = {
  memory: {
    free: 1241837568,
    total: 17179869184,
    updatedAt: new Date()
  }
}

patch(application, layout(state))

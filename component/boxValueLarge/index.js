import {p} from "snabbdom-helpers"

export default (value) => p({
  style: {
    "margin": 0,
    "font-size": 72,
    "font-weight": "bold",
    "font-family": "Droid Sans Mono"
  },
  content: String(value)
})

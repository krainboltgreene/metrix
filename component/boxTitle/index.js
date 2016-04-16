import {h3} from "snabbdom-helpers"

export default (text) => h3({
  style: {
    opacity: 0.8
  },
  content: text
})

import {concat} from "ramda"
import {section} from "snabbdom-helpers"

export default (properties) => {
  return section({
    ...properties,
    style: {
      ...properties.style,
      "flex": 1,
      "border": "1px solid #37474F",
      "padding": 20,
      "margin": 1,
      "min-width": 125,
      "min-height": 125,
      "background-color": "#2ecc71",
      "text-align": "center"
    },
    selector: concat(properties.selector, ".box")
  })
}

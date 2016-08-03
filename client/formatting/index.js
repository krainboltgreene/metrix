import humanFormat from "human-format"
import prettySize from "prettysize"

const percent = (value) => `${value * 100}%`
const money = (value) => `$${value / 100}`

export {
  humanFormat,
  prettySize,
  percent,
  money
}

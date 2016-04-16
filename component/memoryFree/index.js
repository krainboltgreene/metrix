import prettysize from "prettysize"
import number from "../number"

const DEFAULT = 0

export default ({memory: {free, updatedAt}}) => number({
  title: "Free Memory",
  value: prettysize(free || DEFAULT),
  updatedAt
})

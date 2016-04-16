import prettysize from "prettysize"
import number from "../number"

const DEFAULT = 0

export default ({memory: {data: {used}, created_at}}) => number({
  title: "Used Memory",
  value: prettysize(used || DEFAULT, true),
  updatedAt: new Date(created_at)
})

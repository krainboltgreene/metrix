import prettysize from "prettysize"
import number from "../number"

const DEFAULT = 0

export default ({memory: {data: {free}, created_at}}) => number({
  title: "Free Memory",
  value: prettysize(free || DEFAULT, true),
  updatedAt: new Date(created_at)
})

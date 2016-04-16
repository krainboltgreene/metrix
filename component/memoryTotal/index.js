import prettysize from "prettysize"
import number from "../number"

const DEFAULT = 0

export default ({memory: {data: {total}, created_at}}) => number({
  title: "Total Memory",
  value: prettysize(total || DEFAULT, true),
  updatedAt: new Date(created_at)
})

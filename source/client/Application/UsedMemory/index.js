import React from "react"
import {pipe} from "ramda"
import prettySize from "prettysize"
import Number from "../Number"


export default function UsedMemory () {
  return <Number
    parent={UsedMemory}
    title="Used Memory"
    storeType="usedMemory"
    format={pipe((value) => parseInt(value, 10), prettySize)}
    size="large"
  />
}

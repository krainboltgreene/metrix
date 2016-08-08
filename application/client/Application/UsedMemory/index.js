import React from "react"
import {pipe} from "ramda"
import prettySize from "prettysize"
import Number from "../Number"


export default function UsedMemory () {
  return <Number
    title="Used Memory"
    storeType="usedMemory"
    format={pipe(parseInt, prettySize)}
    size="large"
  />
}

import React from "react"
import {pipe} from "ramda"
import prettySize from "prettysize"
import Number from "../Number"

export default function TotalMemory () {
  return <Number
    title="Total Memory"
    storeType="totalMemory"
    format={pipe(parseInt, prettySize)}
    size="large"
  />
}

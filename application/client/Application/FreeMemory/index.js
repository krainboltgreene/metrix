import React from "react"
import {pipe} from "ramda"
import prettySize from "prettysize"
import Number from "../Number"

export default function FreeMemory () {
  return <Number
    title="Free Memory"
    storeType="freeMemory"
    format={pipe((value) => parseInt(value, 10), prettySize)}
    size="large"
  />
}

import React from "react"
import {pipe} from "ramda"
import {prettySize} from "~/application/client/formatting"
import Number from "../Number"

export default function TotalMemory () {
  return <Number
    title="Total Memory"
    storeType="totalMemory"
    format={pipe((value) => parseInt(value, 10), prettySize)}
    size="large"
  />
}

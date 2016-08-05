import React from "react"
import {pipe} from "ramda"
import {prettySize} from "~/application/client/formatting"
import Number from "../Number"


export default function UsedMemory () {
  return <Number
    title="Used Memory"
    storeType="usedMemory"
    format={pipe((value) => parseInt(value, 10), prettySize)}
    size="large"
  />
}

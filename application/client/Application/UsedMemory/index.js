import React from "react"
import {pipe} from "ramda"
import {prettySize} from "~/application/library"
import {toNumber} from "~/application/library"
import Number from "../Number"


export default function UsedMemory () {
  return <Number
    title="Used Memory"
    storeType="usedMemory"
    format={pipe(toNumber, prettySize)}
    size="large"
  />
}

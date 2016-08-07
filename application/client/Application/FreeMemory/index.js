import React from "react"
import {pipe} from "ramda"
import {prettySize} from "~/application/library"
import {toNumber} from "~/application/library"
import Number from "../Number"

export default function FreeMemory () {
  return <Number
    title="Free Memory"
    storeType="freeMemory"
    format={pipe(toNumber, prettySize)}
    size="large"
  />
}

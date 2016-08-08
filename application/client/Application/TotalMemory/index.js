import React from "react"
import {pipe} from "ramda"
import {prettySize} from "~/application/library"
import {toNumber} from "~/application/library"
import Number from "../Number"

export default function TotalMemory () {
  return <Number
    title="Total Memory"
    storeType="totalMemory"
    format={pipe(toNumber, prettySize)}
    size="large"
  />
}

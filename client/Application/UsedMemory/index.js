import React from "react"
import Number from "../Number"

export default function UsedMemory () {
  return <Number
    title="Used Memory"
    storeType="memory"
    storeKey="usedPercent"
    format="percent"
  />
}

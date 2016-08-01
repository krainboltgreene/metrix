import React from "react"
import Number from "../Number"

export default function TotalMemory () {
  return <Number
    title="Total Memory"
    storeType="memory"
    storeKey="total"
    format="prettySize"
    size="large"
  />
}

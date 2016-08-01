import React from "react"
import Number from "../Number"

export default function FreeMemory () {
  return <Number
    title="Free Memory"
    storeType="memory"
    storeKey="free"
    format="prettySize"
  />
}

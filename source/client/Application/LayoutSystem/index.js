import React from "react"
import Layout from "../Layout"
import TotalMemory from "../TotalMemory"
import FreeMemory from "../FreeMemory"
import UsedMemory from "../UsedMemory"

export default function SystemLayout () {
  return <Layout>
    <TotalMemory />
    <FreeMemory />
    <UsedMemory />
  </Layout>
}

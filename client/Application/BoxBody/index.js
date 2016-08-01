import React, {PropTypes} from "react"

export default function BoxBody ({children}) {
  return <section
    style={{
      boxShadow: "0 1px 10px rgba(#000, 0.4)",
      margin: "5px",
      padding: "25px 12px",
      textAlign: "center",
      background: "#5C6A79",
      color: "#fff",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: "253px"
    }}
  >
    {children}
  </section>
}
BoxBody.propTypes = {
  children: PropTypes.node.isRequired
}

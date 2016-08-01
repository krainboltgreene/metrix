import React, {PropTypes} from "react"

const colors = [
  "#5C6A79",
  "#1abc9c",
  "#e67e22",
  "#3498db",
  "#9b59b6"
]
export default function BoxBody ({children}) {
  return <section
    style={{
      boxShadow: "0 1px 10px rgba(#000, 0.4)",
      margin: "5px",
      padding: "25px 12px",
      textAlign: "center",
      background: colors[Math.floor(Math.random() * colors.length)],
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

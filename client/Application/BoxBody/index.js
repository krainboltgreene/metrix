import React, {PropTypes} from "react"

const colors = [
  "#e74c3c",
  "#1abc9c",
  "#e67e22",
  "#8e44ad",
  "#3498db",
  "#d35400",
  "#27ae60",
  "#f39c12",
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
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: "253px",
      minWidth: "300px"
    }}
  >
    {children}
  </section>
}
BoxBody.propTypes = {
  children: PropTypes.node.isRequired
}

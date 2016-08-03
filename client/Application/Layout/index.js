import React, {PropTypes} from "react"

export default function Layout ({children}) {
  return <section
    className="animated pulse"
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      margin: "5px"
    }}
  >
    {children}
  </section>
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

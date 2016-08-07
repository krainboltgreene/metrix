import React, {PropTypes} from "react"

export default function Layout ({children}) {
  return <section
    className="animated bounceIn"
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
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

import React, {PropTypes} from "react"

export default function BoxContent ({children}) {

  return <section
    className="BoxContent"
    style={{width: "100%"}}
  >
    {children}
  </section>
}
BoxContent.propTypes = {
  children: PropTypes.node.isRequired
}

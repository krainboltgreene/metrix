import React, {PropTypes} from "react"

export default function BoxContent ({children}) {
  return <section className="BoxContent">
    {children}
  </section>
}
BoxContent.propTypes = {
  children: PropTypes.node.isRequired
}

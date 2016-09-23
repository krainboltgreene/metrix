import React, {PropTypes} from "react"
import Loading from "../Loading"

export default function BoxContent ({children, condition}) {
  if (condition) {
    return <section className="BoxContent">
      <Loading />
    </section>
  }

  return <section
    className="BoxContent"
    style={{width: "100%"}}
  >
    {children}
  </section>
}
BoxContent.propTypes = {
  children: PropTypes.node.isRequired,
  condition: PropTypes.bool.isRequired
}

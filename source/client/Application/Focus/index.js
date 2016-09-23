import React, {PropTypes} from "react"

export default function Focus ({component}) {
  return <section className="Focus">
    <component />
  </section>
}
Focus.propTypes = {
  component: PropTypes.node.isRequired
}

import React, {PropTypes} from "react"

export default function BoxSubtitle ({children}) {
  return <header>
    <h4>{children}</h4>
  </header>
}
BoxSubtitle.propTypes = {
  children: PropTypes.node.isRequired
}

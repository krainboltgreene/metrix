import React, {PropTypes} from "react"

export default function BoxHeader ({children}) {
  return <header>
    <h1>{children}</h1>
  </header>
}
BoxHeader.propTypes = {
  children: PropTypes.node.isRequired
}

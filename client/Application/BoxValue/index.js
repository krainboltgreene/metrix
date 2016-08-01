import React, {PropTypes} from "react"

export default function BoxValue ({children}) {
  return <p>
    {children}
  </p>
}
BoxValue.propTypes = {
  children: PropTypes.node.isRequired
}

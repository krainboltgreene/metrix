import React, {PropTypes} from "react"

const sizeChart = {
  large: {
    fontSize: "64px"
  }
}

export default function BoxValue ({children, size}) {
  return <p
    className="animated fadeIn"
    style={sizeChart[size] || {}}
  >
    {children}
  </p>
}
BoxValue.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string
}

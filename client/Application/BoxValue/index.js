import React, {PropTypes} from "react"

export default function BoxValue ({children, size}) {
  switch (size) {
    case "large": {
      return <p style={{fontSize: "64px"}}>
        {children}
      </p>
    }
    default: {
      return <p>
        {children}
      </p>
    }
  }
}
BoxValue.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string
}

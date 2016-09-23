import React, {PropTypes} from "react"
import {connect} from "react-redux"

import LayoutSystem from "./LayoutSystem"
import Focus from "./Focus"
// import DevTool from "./DevTool"

const connectToFocus = connect(
  (state, props) => {
    return {
      ...props,
      focus: state.focus
    }
  }
)

export default connectToFocus(function Application ({focus}) {
  if (focus) {
    return <section className="Application">
      <Focus component={focus} />
    </section>
  }

  return <section>
    <LayoutSystem />
    {/*<DevTool />*/}
  </section>
})

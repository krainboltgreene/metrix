import React, {PropTypes} from "react"
import {connect} from "react-redux"

import LayoutSystem from "./LayoutSystem"
import LayoutDesigner from "./LayoutDesigner"
import LayoutUser from "./LayoutUser"
import LayoutProject from "./LayoutProject"
import LayoutServer from "./LayoutServer"
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
    {/*<LayoutServer />*/}
    <LayoutDesigner />
    <LayoutUser />
    {/*<LayoutProject />*/}
    {/*<DevTool />*/}
  </section>
})

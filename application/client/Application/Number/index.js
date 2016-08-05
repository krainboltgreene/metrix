import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {path} from "ramda"
import {merge} from "ramda"
import {isNil} from "ramda"
import {equals} from "ramda"
import {none} from "ramda"
import BoxBody from "../BoxBody"
import BoxHeader from "../BoxHeader"
import BoxValue from "../BoxValue"
import BoxTime from "../BoxTime"
import Loading from "../Loading"

const connectWithStreams = connect(
  merge
)

export default connectWithStreams(class Number extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    storeType: PropTypes.string.isRequired,
    format: PropTypes.func.isRequired,
    size: PropTypes.string,
    streams: PropTypes.instanceOf(Object)
  }

  shouldComponentUpdate (props) {
    return !equals(this.props, props)
  }

  maybeRender (properties, components) {
    if (none(isNil, properties)) {
      return components()
    }

    return <Loading />
  }

  render () {
    const {title} = this.props
    const {storeType} = this.props
    const {format} = this.props
    const {size} = this.props
    const {streams} = this.props
    const [timestamp, value] = path([storeType, "latest"], streams) || []

    return <BoxBody>
      <BoxHeader>{title}</BoxHeader>
      {this.maybeRender([value, format], () => <BoxValue size={size}>{format(value)}</BoxValue>)}
      <BoxTime timestamp={new Date(timestamp)} />
    </BoxBody>
  }
})

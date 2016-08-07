import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {pathOr} from "ramda"
import {merge} from "ramda"
import {isNil} from "ramda"
import {equals} from "ramda"
import {none} from "ramda"
import {zipObj} from "ramda"
import BoxBody from "../BoxBody"
import BoxHeader from "../BoxHeader"
import BoxValue from "../BoxValue"
import BoxTime from "../BoxTime"
import Loading from "../Loading"

const connectLatest = connect(
  (state, props) => {
    return merge(
      props,
      zipObj(["timestamp", "value"], pathOr([], ["streams", props.storeType, "latest"], state))
    )
  }
)

export default connectLatest(class Number extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    storeType: PropTypes.string.isRequired,
    format: PropTypes.func.isRequired,
    size: PropTypes.string,
    timestamp: PropTypes.string,
    value: PropTypes.string
  }

  shouldComponentUpdate (props) {
    return !equals([this.props.timestamp, this.props.value], [props.timestamp, props.value])
  }

  maybeRender (properties, alternative, components) {
    if (none(isNil, properties)) {
      return components()
    }

    return alternative
  }

  render () {
    const {title} = this.props
    const {storeType} = this.props
    const {format} = this.props
    const {size} = this.props
    const {timestamp} = this.props
    const {value} = this.props

    return <BoxBody>
      <BoxHeader>{title}</BoxHeader>
      {this.maybeRender([value, format], <Loading />, () => <BoxValue size={size}>{format(value)}</BoxValue>)}
      <BoxTime timestamp={new Date(timestamp)} />
    </BoxBody>
  }
})

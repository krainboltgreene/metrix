import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {pathOr} from "ramda"
import {mergeAll} from "ramda"
import {isNil} from "ramda"
import {equals} from "ramda"
import {none} from "ramda"
import {zipObj} from "ramda"
import {objOf} from "ramda"
import {map} from "ramda"
import BoxBody from "../BoxBody"
import BoxHeader from "../BoxHeader"
import BoxSubtitle from "../BoxSubtitle"
import BoxValue from "../BoxValue"
import BoxTime from "../BoxTime"
import Loading from "../Loading"

const connectToTimeseries = connect(
  (state, props) => {
    return mergeAll(
      [
        props,
        zipObj(["timestamp", "value"], pathOr([], ["streams", props.storeType, "latest"], state)),
        objOf("timeseries", map(toNumber, pathOr([], ["streams", props.storeType, "timeseries"], state)))
      ]
    )
  }
)

export default connectToTimeseries(class Number extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    storeType: PropTypes.string.isRequired,
    format: PropTypes.func.isRequired,
    size: PropTypes.string,
    timeseries: PropTypes.instanceOf(Array),
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
    const {subtitle} = this.props
    const {format} = this.props
    const {size} = this.props
    const {timestamp} = this.props
    const {timeseries} = this.props
    const {value} = this.props

    return <BoxBody>
      <BoxHeader>{title}</BoxHeader>
      {this.maybeRender([subtitle], null, () => <BoxSubtitle>{subtitle}</BoxSubtitle>)}
      {this.maybeRender([value, format], <Loading />, () => <BoxValue size={size}>{format(value)}</BoxValue>)}
      <BoxTime timestamp={new Date(timestamp)} />
    </BoxBody>
  }
})

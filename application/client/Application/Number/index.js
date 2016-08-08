import React, {Component, PropTypes} from "react"
import {Sparklines} from "react-sparklines"
import {SparklinesLine} from "react-sparklines"
import {connect} from "react-redux"
import {pathOr} from "ramda"
import {path} from "ramda"
import {mergeAll} from "ramda"
import {isNil} from "ramda"
import {equals} from "ramda"
import {none} from "ramda"
import {objOf} from "ramda"
import {map} from "ramda"
import BoxBody from "../BoxBody"
import BoxHeader from "../BoxHeader"
import BoxSubtitle from "../BoxSubtitle"
import BoxValue from "../BoxValue"
import Loading from "../Loading"

const connectToTimeseries = connect(
  (state, props) => {
    return mergeAll(
      [
        props,
        objOf("value", path(["streams", props.storeType, "latest"], state)),
        objOf("timeseries", map((value) => parseInt(value, 10), pathOr([], ["streams", props.storeType, "timeseries"], state)))
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
    value: PropTypes.string
  }

  shouldComponentUpdate (props) {
    return !equals(this.props.value, props.value)
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
    const {timeseries} = this.props
    const {value} = this.props

    return <BoxBody>
      <BoxHeader>{title}</BoxHeader>
      {this.maybeRender([subtitle], null, () => <BoxSubtitle>{subtitle}</BoxSubtitle>)}
      {this.maybeRender([value, format], <Loading />, () => <BoxValue size={size}>{format(value)}</BoxValue>)}
      {
        this.maybeRender(
          [timeseries],
          <Loading />,
          () => {
            return <Sparklines
              data={timeseries}
            >
              <SparklinesLine color="black" />
            </Sparklines>
          })}
    </BoxBody>
  }
})

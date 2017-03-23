import React, {Component, PropTypes} from "react"
import {Sparklines} from "react-sparklines"
import {SparklinesLine} from "react-sparklines"
import {SparklinesReferenceLine} from "react-sparklines"
import shallowCompare from "react-addons-shallow-compare"
import {connect} from "react-redux"
import {pathOr} from "ramda"
import {isEmpty} from "ramda"
import {isNil} from "ramda"
import {map} from "ramda"
import {takeLast} from "ramda"
import BoxBody from "../BoxBody"
import BoxHeader from "../BoxHeader"
import BoxContent from "../BoxContent"
import BoxValue from "../BoxValue"

const asIntegerStream = map((data) => parseInt(data, 10))
const connectToTimeseries = connect(
  (state, props) => {
    const timeseries = pathOr([], ["streams", props.storeType, "timeseries"], state)
    const current = parseInt(takeLast(1, timeseries), 10) || 0
    const previous = parseInt(takeLast(1, takeLast(2, timeseries)), 10) || 0

    return {
      ...props,
      current,
      previous,
      timeseries
    }
  }
)

export default connectToTimeseries(class Number extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    storeType: PropTypes.string.isRequired,
    format: PropTypes.func.isRequired,
    size: PropTypes.string,
    timeseries: PropTypes.instanceOf(Array),
    previous: PropTypes.number,
    current: PropTypes.number,
    parent: PropTypes.func.isRequired
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  onClickBoxContent () {
    return this.props.dispatch({type: "NAVIGATE", payload: {component: this.props.parent}})
  }

  render () {
    const {dispatch} = this.props
    const {title} = this.props
    const {subtitle} = this.props
    const {format} = this.props
    const {size} = this.props
    const {timeseries} = this.props
    const {previous} = this.props
    const {current} = this.props
    const {parent} = this.props

    return <BoxBody>
      <BoxHeader
        onClick={this.onClickBoxContent}
      >
        {title}
        {
          isNil(subtitle)
          ? null
          : <p><small>{subtitle}</small></p>
        }
      </BoxHeader>
      <BoxContent
        condition={isNil(current) || isEmpty(timeseries)}
        parent={parent}
        dispatch={dispatch}
      >
        <BoxValue size={size}>{format(current)}</BoxValue>
        <p>Was {format(previous)}</p>
        <Sparklines
          data={asIntegerStream(timeseries)}
        >
          <SparklinesLine
            style={{fill: "none"}}
            color="white"
          />
          <SparklinesReferenceLine
            type="avg"
            style={{stroke: "white", strokeOpacity: 0.75, strokeDasharray: "2, 2"}}
          />
        </Sparklines>
      </BoxContent>
    </BoxBody>
  }
})

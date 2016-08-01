import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import {path} from "ramda"
import {merge} from "ramda"
import {isNil} from "ramda"
import {none} from "ramda"
import * as formatting from "~/client/formatting"
import BoxBody from "../BoxBody"
import BoxHeader from "../BoxHeader"
import BoxValue from "../BoxValue"
import BoxTime from "../BoxTime"
import Loading from "../Loading"

const connectWithStatistics = connect(
  merge
)

const maybeRender = (properties, components) => {
  if (none(isNil, properties)) {
    return components()
  }

  return <Loading />
}

export default connectWithStatistics(class Number extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    storeType: PropTypes.string.isRequired,
    storeKey: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    size: PropTypes.string,
    statistics: PropTypes.object
  }

  render () {
    const {title} = this.props
    const {storeType} = this.props
    const {storeKey} = this.props
    const {format} = this.props
    const {size} = this.props
    const {statistics} = this.props

    const value = path([storeType, storeKey], statistics)
    const createdAt = path([storeType, "created_at"], statistics)
    const formatter = formatting[format]

    console.log({
      value,
      f: formatter(value)
    })

    return <BoxBody>
      <BoxHeader>{title}</BoxHeader>
      <BoxTime timestamp={createdAt} />
    </BoxBody>
  }
})

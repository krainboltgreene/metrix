import {createStore} from "redux"
// import {applyMiddleware} from "redux"
import {compose} from "redux"
import listener from "../listener"
import DevTool from "../Application/DevTool"

const enhancer = compose(
  DevTool.instrument()
)

export default createStore(listener, {}, enhancer)

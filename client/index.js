import {Observable} from "rx"
import {run} from "@cycle/core"
import {makeHTTPDriver} from "@cycle/http"
import {init} from "snabbdom"
import snabClass from "snabbdom/modules/class"
import snabProps from "snabbdom/modules/props"
import snabStyle from "snabbdom/modules/style"

import layout from "../layout"

const patch = init([
  snabClass,
  snabProps,
  snabStyle
])
const application = () => document.getElementById("application")

const MINIMUM_TIMEOUT = 750
const requestMemory$ = (tempo$) => tempo$.map(() => ({
  url: "http://localhost:8081/memories",
  method: "GET",
  query: {
    order: "created_at.desc",
    select: "data,created_at"
  },
  headers: {
    "Accept": "application/json",
    "Range-Unit": "items",
    "Range": "0-0"
  }
}))
const receiveMemory$ = (http$) => http$.filter((response) => response.request.url === "http://localhost:8081/memories").switch().map((response) => response.body[0])

const main = ({http}) => {
  const tempo$ = Observable.interval(MINIMUM_TIMEOUT)
  const outgoing$ = Observable.merge(
    requestMemory$(tempo$)
  ).share()
  const incoming$ = Observable.combineLatest(
    receiveMemory$(http),
    (memory) => ({memory})
  ).share()

  incoming$.forEach((state) => patch(application(), layout(state)))

  return {
    http: outgoing$
  }
}

const drivers = {
  http: makeHTTPDriver()
}

run(main, drivers)

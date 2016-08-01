import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {indexBy} from "ramda"
import {prop} from "ramda"
import {map} from "ramda"
import {hammer} from "~/library"
import Application from "./Application"
import store from "./store"

window.store = store

const ONE_SECOND = 1000

setInterval(() => {
  store.dispatch({type: "STATISTICS_FETCHING"})
  fetch("http://localhost:8081/latests")
    .then((response) => response.json())
    .then(map(hammer("data")))
    .then(indexBy(prop("type")))
    .then((statistics) => store.dispatch({type: "STATISTICS_RECEIVED", payload: statistics}))
}, ONE_SECOND)

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("application")
)

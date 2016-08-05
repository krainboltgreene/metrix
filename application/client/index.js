import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {map} from "ramda"
import {keys} from "ramda"
import {tap} from "ramda"
import {toPairs} from "ramda"
import Application from "./Application"
import store from "./store"

window.store = store

const HEARTBEAT = 1000

const fetchType = (type) => {
  store.dispatch({type: "FETCHING_TYPE", payload: {type}})

  return fetch(`http://localhost:8081/types/${type}`)
    .then((response) => response.json())
    .then((values) => store.dispatch({type: "VALUES_RECEIVED", payload: {values, type}}))
}

const fetchTypes = () => {
  store.dispatch({type: "FETCHING_TYPES"})

  return fetch("http://localhost:8081/types")
    .then((response) => response.json())
    .then(keys)
    .then(tap((types) => store.dispatch({type: "TYPES_RECEIVED", payload: {types}})))
    .then(map(fetchType))
}

setInterval(fetchTypes, HEARTBEAT)

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("application")
)

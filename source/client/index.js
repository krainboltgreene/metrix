import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {map} from "ramda"
import {tap} from "ramda"
import Application from "./Application"
import store from "./store"

window.store = store

const HEARTBEAT = 1000

// setInterval(
  function fetchTypes () {
    store.dispatch({type: "FETCHING_TYPES"})

    return fetch("http://localhost:8080/types")
      .then((response) => response.json())
      .then(tap((types) => store.dispatch({type: "TYPES_RECEIVED", payload: {types}})))
      .then(map(function fetchType (type) {
        store.dispatch({type: "FETCHING_TYPE", payload: {type}})

        return fetch(`http://localhost:8080/types/${type}`)
          .then((response) => response.json())
          .then((values) => store.dispatch({type: "VALUES_RECEIVED", payload: {values, type}}))
      }))
  }
  fetchTypes ()
// , HEARTBEAT)

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("application")
)

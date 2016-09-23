import {last} from "ramda"

export const initialState = {
  streams: {},
  loading: false,
  focus: false
}

export default function listener (state = initialState, signal) {
  switch (signal.type) {
    case "NAVIGATE": {
      return {
        ...state,
        focusing: signal.payload.slug
      }
    }
    case "FETCHING_TYPE": {
      return {
        ...state,
        loading: true
      }
    }
    case "TYPES_RECEIVED": {
      return {
        ...state,
        loading: false
      }
    }
    case "VALUES_RECEIVED": {
      return {
        ...state,
        streams: {
          ...state.streams,
          [signal.payload.type]: {
            latest: last(signal.payload.values),
            timeseries: signal.payload.values
          }
        }
      }
    }
    default: {
      console.log({signal})
      return state
    }
  }
}

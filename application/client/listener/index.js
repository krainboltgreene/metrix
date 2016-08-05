import {last} from "ramda"
import {sortBy} from "ramda"
import {head} from "ramda"
import {toPairs} from "ramda"
import {pipe} from "ramda"

const chronologicallyLatest = pipe(
  toPairs,
  sortBy(head),
  last
)

export const initialState = {
  streams: {},
  loading: false
}

export default function listener (state = initialState, signal) {
  switch (signal.type) {
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
            latest: chronologicallyLatest(signal.payload.values),
            timeseries: signal.payload.values
          }
        }
      }
    }
    default: {
      return state
    }
  }
}
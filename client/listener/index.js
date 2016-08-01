const initialState = {
  statistics: {}
}

export default function listener (state = initialState, signal) {
  switch (signal.type) {
    case "STATISTICS_FETCHING": {
      return {
        ...state,
        loading: true
      }
    }
    case "STATISTICS_RECEIVED": {
      return {
        ...state,
        loading: false,
        statistics: {
          ...state.statistics,
          ...signal.payload
        }
      }
    }
    default: {
      return state
    }
  }
}

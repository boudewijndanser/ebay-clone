import {FETCHED_DETAILED_AD} from '../actions/ads'

export default function (state = null, action) {
  switch (action.type) {
    case FETCHED_DETAILED_AD:
      return action.payload

    default:
      return state
  }
}

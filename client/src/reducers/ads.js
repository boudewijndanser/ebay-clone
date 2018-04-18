//client/src/reducers/ads.js

import {FETCHED_ALL_ADS} from '../actions/ads'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_ALL_ADS:
      return action.payload

    default:
      return state
  }
}

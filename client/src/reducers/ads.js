//client/src/reducers/ads.js

import {FETCHED_ALL_ADS, ADD_AD, REMOVE_AD, UPDATE_AD} from '../actions/ads'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_ALL_ADS:
      return action.payload

    case ADD_AD:
      console.log('action.payload: ', action.payload)
  	  return [...state, action.payload]

  	case REMOVE_AD:
  	  return state.filter(ad => ad.id !== action.payload)

    case UPDATE_AD:
      return state.map(ad => {
        if (ad.id === action.payload.id) {
          return action.payload
        }
        else return ad
      })

    default:
      return state
  }
}

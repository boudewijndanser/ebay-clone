import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_DETAILED_AD = 'FETCHED_DETAILED_AD'
export const FETCHED_ALL_ADS = 'FETCHED_ALL_ADS'
export const ADD_AD = 'ADD_AD'
export const REMOVE_AD = 'REMOVE_AD'
export const UPDATE_AD = 'UPDATE_AD'

export const deleteAd = (adId) => (dispatch) => {
  request
    .delete(`${baseUrl}/ads/${adId}`)
    .then(response => dispatch({
      type: REMOVE_AD,
      payload: adId
    }))
}

export const fetchAd = (adId) => (dispatch) => {
  request
    .get(`${baseUrl}/ads/${adId}`)
    .then(response => dispatch({
      type: FETCHED_DETAILED_AD,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchAllAds = () => (dispatch) => {
   request
    .get(`${baseUrl}/ads`)
    .then(response => dispatch({
      type: FETCHED_ALL_ADS,
      payload: response.body.ads
    }))
    .catch(err => alert(err))
}

export const createAd = (ad) => (dispatch) => {
  request
    .post(`${baseUrl}/ads`)
    .send(ad)
    .then(response => dispatch({
      type: ADD_AD,
      payload: response.body
    }))
}

export const updateAd = (adId, updates) => (dispatch) => {
  request
    .put(`${baseUrl}/ads/${adId}`)
    .send(updates)
    .then(response => dispatch({
      type: UPDATE_AD,
      payload: response.body
    }))
}

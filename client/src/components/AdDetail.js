//client/src/components/AdDetail.js
import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAd, updateAd} from '../actions/ads'

console.log('--- AdDetail loaded')

class AdDetail extends PureComponent {
  componentWillMount(props) {
    this.props.fetchAd(this.props.match.params.id)
  }

  render() {
    const {ad} = this.props
    if (!ad) return null


    return (
      <div>
      <h3>{ ad.title }</h3>
         <h4>&euro; {ad.price}.00</h4>
         <img src={ad.picture} alt={ad.title} />
         <p>{ad.description}</p>
      </div>
    )
  }
}


const mapStateToProps = function (state, props) {
  return {
    ad: state.ad
  }
}
export default connect(mapStateToProps, {fetchAd, updateAd})(AdDetail)

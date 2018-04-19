//client/src/containers/PlaceAd.js
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createAd} from '../actions/ads'
//import {Link} from 'react-router-dom'
import AdForm from '../components/AdForm'


console.log('--- PlaceAd loaded')

class PlaceAd extends PureComponent {
  static propTypes = {
    ads: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  }

  createProduct = (ad) => {
    this.props.createAd(ad)
    console.log('createAd: ', this.props.createAd)
  }


  render() {
    //const {ads} = this.props
    return (
      <div>
        <h1>Ebay Clone</h1>

        <table>

          <AdForm onSubmit={this.createProduct} />
				</table>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    ads: state.ads
  }
}

export default connect(mapStateToProps, {createAd})(PlaceAd)

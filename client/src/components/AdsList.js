//client/src/components/AdsList.js
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllAds} from '../actions/ads'
import {Link} from 'react-router-dom'


console.log('--- AdsList loaded')

class AdsList extends PureComponent {
  static propTypes = {
    ads: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  }


  componentWillMount() {
    this.props.fetchAllAds()
  }

  render() {
    const {ads} = this.props
    return (
      <div>
        <h1>Ebay Clone</h1>

        <table>

          <tbody>
            { ads.map(ad => (<tr key={ad.id}>
              <td><Link to={ `/ads/${ad.id}` }>{ad.title}</Link></td>
              <td>&euro; {ad.price}.00</td>
            </tr>)) }
          </tbody>
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

export default connect(mapStateToProps, { fetchAllAds })(AdsList)

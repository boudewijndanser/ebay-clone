// server/index.js
// Setting up shop

const express = require('express')
const app = express()

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')


app.listen(4001, () => console.log('Express API listening on port 4001'))
// Add promise / maybe resolve here?

// Server / frontend location x / y thing
app.use(function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})


const Ad = sequelize.define('ad', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  picture: {
  type: Sequelize.STRING,
  allowNull: false
},
  email: {
  type: Sequelize.STRING,
  allowNull: false
},
  phone: {
  type: Sequelize.INTEGER,
  allowNull: false}
},
 {
  tableName: 'ads',
  timestamps: false
})

app.get('/ads', (request, response) => {
	Ad.findAll({
	  attributes: ['id', 'title', 'price']
	})
	  .then(result => {
	    // When db answers, do this
	    response.send({
	    	ads: result
	    })
	  })
	  .catch(err => {
	    // there was an error, return some HTTP error code
	    response.status(500).send({error: 'Could not retrieve information from database...'})
	  })
})

app.get('/ads/:id', (request, response) => {
	const adId = request.params.id
	Ads.findById(adId)
	  .then(result => {
	  	if (!result) {
        // No result > 404
	  		response.status(404).send({error: 'There is nothing here...'})
	  	}
	  	else {
	  		response.send(result)
	  	}
	  })
	  .catch(err => {
	    response.status(500).send({error: 'Sorry, we could not find the ad'})
	  })
})

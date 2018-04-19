// server/index.js
// Setting up shop
console.log('--- Server booting...')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

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
  type: Sequelize.STRING,
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
	Ad.findById(adId)
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

app.post('/place-ad', (request, response) => {
  console.log('---> Starting post')
  const ad = request.body
  console.log(ad)
  console.log('-----------------Request body / ad: ', ad)

  Ad.create(ad).then(entity => {

    // respond with status + entity
    response.status(201).send(entity)
  })
})

app.put('/ads/:id', (request, response) => {
  const adId = Number(request.params.id)
  const updates = request.body

  // find the ad
  Ad.findById(request.params.id)
    .then(entity => {
      return entity.update(updates)
    })
    .then(final => {
      // respond showing ad and status code 200 OK
      response.send(final)
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went horribly wrong`,
        error
      })
    })

})

app.delete('/ads/:id', (request, response) => {
  const adId = Number(request.params.id)

  Ad.findById(request.params.id)
	  .then(entity => {
	    // change the ad and store it
	    return entity.destroy()
	  })
	  .then(_ => {
	    // respond with the changed AD and status code 200 OK
	    response.send({
	      message: 'The ad was deleted.'
	    })
	  })
	  .catch(error => {
	    response.status(500).send({
	      message: `Something went terribly wrong`,
	      error
	    })
	  })
})

import React, {PureComponent} from 'react'

class AdForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value

    })
  }

	render() {
    const initialValues = this.props.initialValues || {}
		return (
      <form onSubmit={this.handleSubmit}>
        <div><h1>Place your ad...</h1></div>
				<div>
					<label htmlFor="title">Title</label>
					<input name="title" id="title" value={
						this.state.tile || initialValues.title || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Price</label>
					<input name="price" id="price" value={
						this.state.price || ''
					} onChange={ this.handleChange } />
				</div>
        <div>
          <label htmlFor="picture">Picture</label>
          <input name="picture" id="picture" value={
            this.state.picture || ''
          } onChange={ this.handleChange } />
        </div>

				<div>
					<label htmlFor="description">Product description</label>
					<input name="description" id="description" value={
						this.state.description || ''
					} onChange={ this.handleChange } />
				</div>

        <div>
          <label htmlFor="email">Email</label>
          <input name="email" id="email" value={
            this.state.email|| ''
          } onChange={ this.handleChange } />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input name="phone" id="phone" value={
            this.state.phone || ''
          } onChange={ this.handleChange } />
        </div>

				<button type="submit">Save</button>
			</form>
		)
	}
}

export default AdForm

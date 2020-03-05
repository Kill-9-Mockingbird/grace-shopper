import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, updateOrderQuantity} from '../store/cart'
// import UpdateCartForm from './UpdateCartForm'

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      packageQty: ''
    }
    this.handleChangeQuantityUpdate = this.handleChangeQuantityUpdate.bind(this)
    this.handleSubmitQuantityUpdate = this.handleSubmitQuantityUpdate.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }
  componentDidMount() {
    this.props.fetchCart()
    this.props.updateOrderQuantity()
  }

  handleRemove(experienceId, event) {
    event.preventDefault()
  }

  handleChangeQuantityUpdate(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitQuantityUpdate(experienceId, event) {
    event.preventDefault()
    const packageQty = event.target.packageQty.value
    const updates = {packageQty: packageQty, experienceId: experienceId}
    this.props.updateOrderQuantity(updates)
    this.setState({
      packageQty: ''
    })
  }

  render() {
    const experiences = this.props.cart.experiences

    return (
      <div>
        {experiences.map(experience => {
          return (
            <div key={experience.id}>
              <p>Name: {experience.name}</p>
              <img src={experience.imageUrl} />
              <p>Hosted By: {experience.celebrity.name}</p>
              <p>Description: {experience.description}</p>
              <p>
                Location: {experience.city},{experience.state}
              </p>
              <p>Duration: {experience.duration} hour(s)</p>
              <p>Price: ${experience.price}</p>
              <p>Quantity: {experience.orderDetail.packageQty}</p>
              <form
                onSubmit={event => {
                  this.handleSubmitQuantityUpdate(`${experience.id}`, event)
                }}
              >
                <label>
                  Update Quantity:
                  <input
                    type="text"
                    name="packageQty"
                    onChange={this.handleChangeQuantityUpdate}
                    value={this.state.packageQty}
                  />
                </label>
                <button type="submit">Submit New Quantity</button>
              </form>

              <button
                type="button"
                onClick={event => {
                  this.handleRemove(`${experience.id}`, event)
                }}
              >
                Remove Item
              </button>
            </div>
          )
        })}
        <button type="button">Checkout</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('this is state', state)
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => {
      dispatch(fetchCart())
    },
    updateOrderQuantity: updates => dispatch(updateOrderQuantity(updates))
  }
}

export const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)

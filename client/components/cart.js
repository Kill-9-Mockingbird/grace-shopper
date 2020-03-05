import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, removeOrder} from '../store/cart'

class Cart extends Component {
  constructor() {
    super()
    this.handleRemove = this.handleRemove.bind(this)
  }
  componentDidMount() {
    this.props.fetchCart()
  }

  handleRemove(experienceId, event) {
    event.preventDefault()
    this.props.removeOrder(experienceId)
  }
  render() {
    console.log(this.props)
    const experiences = this.props.cart.experiences
    return experiences.length !== 0 ? (
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
    ) : (
      <div>Cart is empty!</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => {
      dispatch(fetchCart())
    },
    removeOrder: experienceId => {
      dispatch(removeOrder(experienceId))
    }
  }
}

export const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, removeOrder} from '../store/cart'
import CartItems from './cartItems'

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
    const experiences = this.props.cart.experiences
    return !experiences || experiences.length <= 0 ? (
      <div>Cart is empty!</div>
    ) : (
      experiences.map(experience => {
        return (
          <CartItems
            key={experience.id}
            experience={experience}
            handleRemove={this.handleRemove}
          />
        )
      })
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: {
      experiences: state.cart.experiences
    }
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

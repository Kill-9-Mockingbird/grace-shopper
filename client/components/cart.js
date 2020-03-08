import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  fetchCart,
  increaseQty,
  decreaseQty,
  removeOrder,
  checkout
} from '../store/cart'
import CartItems from './cartItems'

class Cart extends Component {
  constructor() {
    super()
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
  }
  componentDidMount() {
    this.props.fetchCart()
  }

  handleRemove(experienceId, event) {
    event.preventDefault()
    this.props.removeOrder(experienceId)
  }

  increase(id) {
    this.props.increaseQty(id)
  }

  decrease(id) {
    this.props.decreaseQty(id)
  }

  handleCheckout(event) {
    event.preventDefault()
    this.props.checkout(event)
    console.log('this is props', this.props)
  }

  render() {
    const experiences = this.props.cart.experiences

    return !experiences ? (
      <div className="container">Your cart is empty!</div>
    ) : (
      <div>
        <div className="container">
          {experiences.map(e => {
            return (
              <CartItems
                key={e.id}
                experience={e}
                handleRemove={this.handleRemove}
                increase={this.increase}
                decrease={this.decrease}
              />
            )
          })}
        </div>

        <div>
          <button type="submit" onClick={this.handleCheckout()}>
            Checkout
          </button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => {
      dispatch(fetchCart())
    },
    increaseQty: id => {
      dispatch(increaseQty(id))
    },
    decreaseQty: id => {
      dispatch(decreaseQty(id))
    },
    removeOrder: experienceId => {
      dispatch(removeOrder(experienceId))
    }
  }
}

export const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)

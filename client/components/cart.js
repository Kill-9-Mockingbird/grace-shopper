import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  fetchCart,
  increaseQty,
  decreaseQty,
  removeOrder,
  checkoutOrder,
  removeGuestOrder,
  fetchGuestCart
} from '../store/cart'
import CartItems from './cartItems'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
  }
  componentDidMount() {
    this.props.isLoggedIn && this.props.fetchCart()
    !this.props.isLoggedIn && this.props.fetchGuestCart()
  }

  handleRemove(experienceId, event) {
    event.preventDefault()
    this.props.isLoggedIn && this.props.removeOrder(experienceId)
    !this.props.isLoggedIn && this.props.removeGuestOrder(experienceId)
  }

  increase(id) {
    this.props.increaseQty(id)
  }

  decrease(id) {
    this.props.decreaseQty(id)
  }

  handleCheckout() {
    this.props.checkoutOrder()
  }

  render() {
    const experiences = this.props.cart.experiences

    return !experiences || !experiences.length ? (
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
          <button type="button" onClick={this.handleCheckout}>
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
    // can become an array of objects where you can map the appropriate product you're looking for since it will be fetched from routes, and add your quantity to that if you want to
    // [{id: 1, quantity: 1, name: 'kayaking with beyonce'}, ...]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => {
      dispatch(fetchCart())
    },
    fetchGuestCart: () => {
      dispatch(fetchGuestCart())
    },
    increaseQty: id => {
      dispatch(increaseQty(id))
    },
    decreaseQty: id => {
      dispatch(decreaseQty(id))
    },
    removeOrder: experienceId => {
      dispatch(removeOrder(experienceId))
    },
    checkoutOrder: id => {
      dispatch(checkoutOrder(id))
    },
    removeGuestOrder: experienceId => {
      dispatch(removeGuestOrder(experienceId))
    }
  }
}

export const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)

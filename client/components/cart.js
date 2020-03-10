import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {
  fetchCart,
  increaseQty,
  decreaseQty,
  removeOrder,
  checkoutOrder,
  removeGuestOrder,
  fetchGuestCart,
  increaseQtyGuest,
  decreaseQtyGuest
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

  increase(orderId, experienceId) {
    this.props.isLoggedIn && this.props.increaseQty(orderId, experienceId)
    !this.props.isLoggedIn && this.props.increaseQtyGuest(experienceId)
  }

  decrease(orderId, experienceId) {
    this.props.isLoggedIn && this.props.decreaseQty(orderId, experienceId)
    !this.props.isLoggedIn && this.props.decreaseQtyGuest(experienceId)
  }

  handleCheckout() {
    this.props.checkoutOrder()
  }

  render() {
    const experiences = this.props.cart.experiences
    const orderId = this.props.cart.id

    return !experiences || !experiences.length ? (
      <div className="custom-container">Your cart is empty!</div>
    ) : (
      <div>
        <div className="custom-container">
          {experiences.map(e => {
            return (
              <CartItems
                key={e.id}
                experience={e}
                orderId={orderId}
                handleRemove={this.handleRemove}
                increase={this.increase}
                decrease={this.decrease}
              />
            )
          })}
          <br />
          <br />
          <Link to="/checkout">
            <button type="button" onClick={this.handleCheckout}>
              Checkout
            </button>
          </Link>
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
    fetchGuestCart: () => {
      dispatch(fetchGuestCart())
    },
    increaseQty: (orderId, experienceId) => {
      dispatch(increaseQty(orderId, experienceId))
    },
    decreaseQty: (orderId, experienceId) => {
      dispatch(decreaseQty(orderId, experienceId))
    },
    increaseQtyGuest: experienceId => {
      dispatch(increaseQtyGuest(experienceId))
    },
    decreaseQtyGuest: experienceId => {
      dispatch(decreaseQtyGuest(experienceId))
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

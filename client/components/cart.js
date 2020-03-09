import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchCart,
  increaseQty,
  decreaseQty,
  removeOrder,
  removeGuestOrder,
  fetchGuestCart
} from '../store/cart'
import CartItems from './cartItems'

class Cart extends Component {
  constructor() {
    super()
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
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

  render() {
    const experiences = this.props.cart.experiences

    return !experiences || !experiences.length ? (
      <div className="container">Your cart is empty!</div>
    ) : (
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
    increaseQty: id => {
      dispatch(increaseQty(id))
    },
    decreaseQty: id => {
      dispatch(decreaseQty(id))
    },
    removeOrder: experienceId => {
      dispatch(removeOrder(experienceId))
    },
    removeGuestOrder: experienceId => {
      dispatch(removeGuestOrder(experienceId))
    }
  }
}

export const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)

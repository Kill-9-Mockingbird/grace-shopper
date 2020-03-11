import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, Container, Typography, Grid} from '@material-ui/core'

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
    this.cartInfo = {}
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleCheckout = this.handleCheckout.bind(this)
  }

  componentDidMount() {
    this.props.isLoggedIn && this.props.fetchCart()
    !this.props.isLoggedIn && this.props.fetchGuestCart()
    if (this.props.user.orders) {
      for (let i = 0; i < this.props.user.orders.length; i++) {
        if (this.props.user.orders[i].purchased === false) {
          this.cartInfo[`${i}`] = this.props.user.orders[i]
          console.log(this.cartInfo)

          break
        }
      }
    }
  }

  componentDidUpdate() {
    if (this.props.user.orders) {
      for (let i = 0; i < this.props.user.orders.length; i++) {
        if (this.props.user.orders[i].purchased === false) {
          this.cartInfo[`${i}`] = this.props.user.orders[i]
          break
        }
      }
    }
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

  handleCheckout(id) {
    this.props.isLoggedIn
      ? this.props.checkoutOrder(id)
      : alert('Thank you for your interest! Login or Signup to checkout!')
  }

  render() {
    console.log(this.cartInfo)
    const experiences = this.props.cart.experiences
    let total = 0

    if (this.props.user.id && experiences) {
      experiences.forEach(experience => {
        total += experience.price * experience.orderDetail.packageQty
      })
    }

    if (!this.props.user.id && experiences) {
      experiences.forEach(experience => {
        total += experience.price * experience.orderDetail.packageQty
      })
    }

    const orderId = this.props.cart.id

    return !experiences || !experiences.length ? (
      <React.Fragment>
        <Container maxWidth="sm" align="center">
          <Typography variant="h4">
            <br />
            Your Cart
          </Typography>
          <br />
          <br />
          Your cart is empty!
        </Container>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div>
          <Container maxWidth="sm" align="center">
            <Typography variant="h4">
              <br />
              Your Cart
            </Typography>
            <br />
            <br />
            <Grid container spacing={1} justify="center" alignItems="center">
              {experiences.map(e => {
                return (
                  <Grid item key={e.id} xs={12}>
                    <CartItems
                      experience={e}
                      orderId={orderId}
                      handleRemove={this.handleRemove}
                      increase={this.increase}
                      decrease={this.decrease}
                    />
                  </Grid>
                )
              })}
            </Grid>
            <br />
            <Grid container spacing={3} justify="flex-end" alignItems="center">
              <Grid item xs={4}>
                <Typography variant="subtitle1">
                  <strong>Order Total:</strong>
                </Typography>{' '}
                <Typography variant="subtitle1" color="secondary">
                  ${total}
                </Typography>
                <br />
                {this.props.isLoggedIn ? (
                  <Link
                    to={{
                      pathname: '/checkout',
                      state: {
                        checkoutOrder: this.checkoutOrder,
                        value: total,
                        cartInfo: this.cartInfo
                      }
                    }}
                  >
                    <Button variant="contained" color="primary">
                      Checkout
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleCheckout}
                  >
                    Checkout
                  </Button>
                )}
              </Grid>
            </Grid>
          </Container>
        </div>
      </React.Fragment>
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

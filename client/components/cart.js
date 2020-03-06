import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, updateOrderQuantity, removeOrder} from '../store/cart'
import CartItems from './cartItems'

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      // packageQty: ''
    }
    this.handleChangeQuantityUpdate = this.handleChangeQuantityUpdate.bind(this)
    this.handleSubmitQuantityUpdate = this.handleSubmitQuantityUpdate.bind(this)
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
      // packageQty: ''
    })
  }

  handleCheckout() {
    console.log('this is props', this.props)
  }

  render() {
    const experiences = this.props.cart.experiences
    return !experiences ? (
      <div className="container">Your cart is empty!</div>
    ) : (
      <div className="container">
        {experiences.map(e => {
          return (
            <CartItems
              key={e.id}
              experience={e}
              handleRemove={this.handleRemove}
            />
          )
        })}
      </div>
    )
    // : (
    //   <div>Cart is empty!</div>
    // )

    // : (
    //   experiences.map(experience => {
    //     return (
    //       <CartItems
    //         key={experience.id}
    //         experience={experience}
    //         handleRemove={this.handleRemove}
    //       />
    //     )
    //   })
    // )
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
    updateOrderQuantity: updates => {
      dispatch(updateOrderQuantity(updates))
    },
    removeOrder: experienceId => {
      dispatch(removeOrder(experienceId))
    }
  }
}

export const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)

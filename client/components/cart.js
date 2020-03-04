import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store'

class Cart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>This is my cart</div>
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = {
  fetchOrders
}

export const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart)

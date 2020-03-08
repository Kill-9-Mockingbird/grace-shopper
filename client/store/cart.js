import axios from 'axios'

//Action Constants
const GET_CART = 'GET_CART'
const ADD_ITEM = 'ADD_ITEM'
const DELETE_ORDER = 'DELETE_ORDER'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const CHECKOUT_ORDER = 'CHECKOUT_ORDER'

//Action Creators
export const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

export const addItem = cart => {
  return {
    type: ADD_ITEM,
    cart
  }
}

export const deleteOrder = cart => {
  return {
    type: DELETE_ORDER,
    cart
  }
}

export const updateQuantity = cart => {
  return {
    type: UPDATE_QUANTITY,
    cart
  }
}

export const checkOut = cart => {
  return {
    type: CHECKOUT_CART,
    cart
  }
}

//Thunks

//Thunk for getting all user items in cart
export const fetchCart = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/cart`)
      if (data) {
        dispatch(getCart(data))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

//Thunk for adding an item in cart
export const addItemThunk = itemId => {
  return async dispatch => {
    try {
      await axios.get('/api/cart')
      const {data} = await axios.put(`/api/cart/${itemId}`)
      dispatch(addItem(data))
    } catch (err) {
      console.log(err)
    }
  }
}

//Thunk for removing an order in cart
export const removeOrder = experienceId => {
  return async dispatch => {
    try {
      const {data} = await axios.delete(`/api/cart/${experienceId}`)
      dispatch(deleteOrder(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// thunk -- increase qty
export const increaseQty = itemId => async dispatch => {
  const {data} = await axios.put(`/api/cart/${itemId}/increase`)
  dispatch(updateQuantity(data))
}

// thunk -- decrease qty
export const decreaseQty = itemId => async dispatch => {
  const {data} = await axios.put(`/api/cart/${itemId}/decrease`)
  dispatch(updateQuantity(data))
}

//Thunk for checking out

export const checkoutOrder = orderId => {
  return async dispatch => {
    try {
      const {data} = await axios.pus('/api/cart/checkout', orderId)
      dispatch(checkOut(data))
    } catch (error) {
      console.log(error)
    }
  }
}

//initialState
const defaultCart = {
  experiences: []
}

//Reducer
export default function(state = defaultCart, action) {
  switch (action.type) {
    case GET_CART:
      return {...action.cart}
    case ADD_ITEM:
      return {
        ...action.cart
      }
    case DELETE_ORDER:
      return {...action.cart}
    case UPDATE_QUANTITY:
      return {...action.cart}
    default:
      return state
  }
}

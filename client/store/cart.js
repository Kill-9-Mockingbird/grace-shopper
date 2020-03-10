/* eslint-disable complexity */
import axios from 'axios'

//Action Constants
const GET_CART = 'GET_CART'
const GET_GUESTCART = 'GET_GUESTCART'
const ADD_ITEM = 'ADD_ITEM'
const ADD_ITEM_GUEST = 'ADD_ITEM_GUEST'
const DELETE_ORDER = 'DELETE_ORDER'
const DELETE_GUEST_ORDER = 'DELETE_GUEST_ORDER'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const UPDATE_QUANTITY_GUEST = 'UPDATE_QUANTITY_GUEST'
const CHECKOUT_ORDER = 'CHECKOUT_ORDER'

//Action Creators
export const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

export const getGuestCart = cart => {
  return {
    type: GET_GUESTCART,
    cart
  }
}

export const addItem = cart => {
  return {
    type: ADD_ITEM,
    cart
  }
}

export const addItemGuest = cart => {
  return {
    type: ADD_ITEM_GUEST,
    cart
  }
}

export const deleteOrder = cart => {
  return {
    type: DELETE_ORDER,
    cart
  }
}
export const deleteGuestOrder = cart => {
  return {
    type: DELETE_GUEST_ORDER,
    cart
  }
}

export const updateQuantity = cart => {
  return {
    type: UPDATE_QUANTITY,
    cart
  }
}
export const updateQuantityGuest = cart => {
  return {
    type: UPDATE_QUANTITY_GUEST,
    cart
  }
}

export const getCheckout = cart => {
  return {
    type: CHECKOUT_ORDER,
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
    } catch (error) {
      console.log(error)
    }
  }
}

//Thunk for getting guest cart
export const fetchGuestCart = () => {
  return async dispatch => {
    try {
      let guestCart = JSON.parse(localStorage.getItem('cart'))
      let experiences = []

      for (let key in guestCart) {
        if (guestCart.hasOwnProperty(key)) {
          let {data} = await axios.get(`/api/experiences/${key}`)
          data.orderDetail = {
            packageQty: guestCart[key]
          }
          experiences.push(data)
        }
      }
      dispatch(getGuestCart(experiences))
    } catch (error) {
      console.log(error)
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
    } catch (error) {
      console.log(error)
    }
  }
}

// thunk -- adding an item in guest cart
export const addItemForGuest = experienceId => {
  return async dispatch => {
    try {
      let guestCart = JSON.parse(localStorage.getItem('cart'))

      if (!guestCart) {
        guestCart = window.localStorage.setItem('cart', JSON.stringify({}))
        guestCart[experienceId] = 1
        window.localStorage.setItem('cart', JSON.stringify(guestCart))
      } else {
        guestCart[experienceId] = 1

        window.localStorage.setItem('cart', JSON.stringify(guestCart))
      }
      let experiences = []
      for (let key in guestCart) {
        if (guestCart.hasOwnProperty(key)) {
          let {data} = await axios.get(`/api/experiences/${key}`)
          data.orderDetail = {
            packageQty: guestCart[key]
          }

          experiences.push(data)
        }
      }
      dispatch(addItemGuest(experiences))
    } catch (error) {
      console.log(error)
    }
  }
}

// thunk -- removing a guest order from guest cart
export const removeGuestOrder = experienceId => {
  return async dispatch => {
    try {
      const guestCart = JSON.parse(localStorage.getItem('cart'))
      delete guestCart[experienceId]
      window.localStorage.setItem('cart', JSON.stringify(guestCart))
      let experiences = []
      for (let key in guestCart) {
        if (guestCart.hasOwnProperty(key)) {
          let {data} = await axios.get(`/api/experiences/${key}`)
          data.orderDetail = {
            packageQty: guestCart[key]
          }
          experiences.push(data)
        }
      }

      dispatch(deleteGuestOrder(experiences))
    } catch (error) {
      console.log(error)
    }
  }
}

// thunk -- removing an order in cart
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

//thunk -- increase qty for guest cart
export const increaseQtyGuest = experienceId => async dispatch => {
  try {
    const guestCart = JSON.parse(localStorage.getItem('cart'))
    if (guestCart.hasOwnProperty(experienceId)) {
      guestCart[experienceId]++
    }
    window.localStorage.setItem('cart', JSON.stringify(guestCart))
    let experiences = []
    for (let key in guestCart) {
      if (guestCart.hasOwnProperty(key)) {
        let {data} = await axios.get(`/api/experiences/${key}`)
        data.orderDetail = {
          packageQty: guestCart[key]
        }
        experiences.push(data)
      }
    }
    dispatch(updateQuantityGuest(experiences))
  } catch (error) {
    console.log(error)
  }
}

//thunk -- decrease qty for guest cart
export const decreaseQtyGuest = experienceId => async dispatch => {
  try {
    const guestCart = JSON.parse(localStorage.getItem('cart'))
    if (guestCart.hasOwnProperty(experienceId)) {
      guestCart[experienceId]--
    }
    window.localStorage.setItem('cart', JSON.stringify(guestCart))
    let experiences = []
    for (let key in guestCart) {
      if (guestCart.hasOwnProperty(key)) {
        let {data} = await axios.get(`/api/experiences/${key}`)
        data.orderDetail = {
          packageQty: guestCart[key]
        }
        experiences.push(data)
      }
    }
    dispatch(updateQuantityGuest(experiences))
  } catch (error) {
    console.log(error)
  }
}

// thunk -- increase qty
export const increaseQty = (orderId, expId) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/cart/${expId}/increase`, {orderId})
    dispatch(updateQuantity(data))
  } catch (error) {
    console.log(error)
  }
}

// thunk -- decrease qty
export const decreaseQty = (orderId, expId) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/cart/${expId}/decrease`, {orderId})
    dispatch(updateQuantity(data))
  } catch (error) {
    console.log(error)
  }
}

// thunk -- checking out

export const checkoutOrder = () => {
  return async dispatch => {
    try {
      await axios.put('/api/cart/checkout')
      dispatch(getCheckout())
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
    case GET_GUESTCART:
      return {...state, experiences: [...action.cart]}
    case ADD_ITEM:
      return {
        ...action.cart
      }
    case ADD_ITEM_GUEST:
      return {...state, experiences: [...action.cart]}
    case DELETE_ORDER:
      return {...action.cart}
    case DELETE_GUEST_ORDER:
      return {...state, experiences: [...action.cart]}
    case UPDATE_QUANTITY:
      return {...action.cart}
    case UPDATE_QUANTITY_GUEST:
      return {...state, experiences: [...action.cart]}
    case CHECKOUT_ORDER:
      return defaultCart
    default:
      return state
  }
}

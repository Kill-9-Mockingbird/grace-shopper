import axios from 'axios'

//Action Constants
const GET_CART = 'GET_CART'
const GET_GUESTCART = 'GET_GUESTCART'
const ADD_ITEM = 'ADD_ITEM'
const DELETE_ORDER = 'DELETE_ORDER'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

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

//Thunk for getting guest cart
export const fetchGuestCart = () => {
  return async dispatch => {
    try {
      //look for guest cart in local storage
      let guestCart = JSON.parse(localStorage.getItem('cart'))
      let experiences = []

      //loop through guestCart, the plan is to store experienceId : packageQty pairs so that we can access experienceId to update quantity later
      for (let key in guestCart) {
        //if key exists in guestCart, we would want to fetch that particular experience with the key (experienceId)
        if (guestCart.hasOwnProperty(key) && guestCart[key]) {
          let {data} = await axios.get(`api/experiences/${key}`)
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
    } catch (err) {
      console.log(err)
    }
  }
}

//Thunk for adding an item in guest cart
export const addItemForGuest = experienceId => {
  return dispatch => {
    try {
      let guestCart = JSON.parse(localStorage.getItem('cart'))
      if (!guestCart) {
        guestCart = window.localStorage.setItem('cart', JSON.stringify({}))
      } else {
        guestCart[experienceId] = 1

        window.localStorage.setItem('cart', JSON.stringify(guestCart))

        const experiences = JSON.parse(localStorage.getItem('cart'))
        dispatch(getGuestCart(experiences))
      }
    } catch (error) {
      console.log(error)
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
    case DELETE_ORDER:
      return {...action.cart}
    case UPDATE_QUANTITY:
      return {...action.cart}
    default:
      return state
  }
}

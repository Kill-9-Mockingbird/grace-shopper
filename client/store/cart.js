import axios from 'axios'

//Action Constants
const GET_CART = 'GET_CART'
const ADD_ITEM = 'ADD_ITEM'
const DELETE_ORDER = 'DELETE_ORDER'
const UPDATE_QUANTITY = 'UPDATE_QUANITTY'

//Action Creators
export const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

export const addItem = itemId => {
  return {
    type: ADD_ITEM,
    itemId
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

//Thunk for adding an item in cart

export const addItemThunk = itemId => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/cart/${itemId}`)
      console.log('add item thunk --', data, itemId)
      await dispatch(addItem(data))
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

//Thunk for updating quanity in cart

export const updateOrderQuantity = updates => {
  return async dispatch => {
    try {
      const {data} = await axios.put(
        `/api/cart/${updates.experienceId}/edit`,
        updates
      )
      dispatch(updateQuantity(data))
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
      console.log('reducer', state)
      return {
        ...state,
        experiences: [...state.experiences, action.itemId]
      }
    case DELETE_ORDER:
    return {...action.cart}
    case UPDATE_QUANTITY: 
      return {...action.cart}
    default:
      return state
  }
}

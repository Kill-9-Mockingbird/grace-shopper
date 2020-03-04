import axios from 'axios'

//Action Constants
const GET_ORDERS = 'GET_ORDERS'
const ADD_ORDER = 'ADD_ORDER'
const DELETE_ORDER = 'DELETE_ORDER'

//Action Creators
export const getOrders = userId => {
  return {
    type: GET_ORDERS,
    data: userId
  }
}

export const addOrder = newOrder => {
  return {
    type: ADD_ORDER,
    data: newOrder
  }
}

export const deleteOrder = deleteId => {
  return {
    type: DELETE_ORDER,
    data: deleteId
  }
}

//Thunks
//Thunk for getting all user orders in cart
export function fetchOrders(userId) {
  return async function(dispatch) {
    try {
      let user = await axios.get(`/api/users/${userId}`)
      if (user) {
        dispatch(getOrders(user.data.orders))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

//initialState
const initialState = []

//Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.data
    case ADD_ORDER:
      return [...state, action.data]
    case DELETE_ORDER:
      return state.filter(item => {
        if (item.id !== action.date) {
          return item
        }
      })
    default:
      return state
  }
}

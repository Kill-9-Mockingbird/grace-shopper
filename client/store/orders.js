import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'
const ADD_ORDER = 'ADD_ORDER'
const DELETE_ORDER = 'DELETE_ORDER'

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

const initialState = []

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

export function fetchOrders(userId) {
  return async function(dispatch) {
    try {
      let user = await axios.get(`/auth/me`)
      if (user) {
        dispatch(getOrders(user.data.orders))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

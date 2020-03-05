import axios from 'axios'

//Action Constants
const GET_CART = 'GET_CART'
// const ADD_ORDER = 'ADD_ORDER'
const DELETE_ORDER = 'DELETE_ORDER'
const UPDATE_QUANTITY = 'UPDATE_QUANITTY'

//Action Creators
export const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

// export const addOrder = newOrder => {
//   return {
//     type: ADD_ORDER,
//     data: newOrder
//   }
// }

export const deleteOrder = experienceId => {
  return {
    type: DELETE_ORDER,
    experienceId
  }
}

export const updateQuantity = cart => {
  return {
    type: UPDATE_QUANTITY,
    cart
  }
}

//Thunks
//Thunk for getting all user orders in cart
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
    // case ADD_ORDER:
    //   return [...state, action.data]
    case DELETE_ORDER:
      return {
        ...state,
        experiences: [
          ...state.experiences.filter(experience => {
            return action.experienceId !== experience.id
          })
        ]
      }
    case UPDATE_QUANTITY: {
      return {...action.cart}
    }
    default:
      return state
  }
}

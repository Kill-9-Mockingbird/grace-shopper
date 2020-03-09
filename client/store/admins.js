import axios from 'axios'
//ACTION TYPES
const ADMIN_GET_USERS = 'ADMIN_GET_USERS'
const ADMIN_GET_USER = 'ADMIN_GET_USER'
const ADMIN_EDIT_USER = 'ADMIN_EDIT_USER'

//ACTION CREATORS
const adminGetUsers = users => ({type: ADMIN_GET_USERS, data: users})
const adminGetUser = user => ({type: ADMIN_GET_USER, data: user})

const adminEditUser = user => ({
  type: ADMIN_EDIT_USER,
  data: user
})

//THUNKS
export const adminGetUsersThunk = () => async dispatch => {
  try {
    const users = await axios.get(`/api/admin/users`)
    dispatch(adminGetUsers(users))
  } catch (err) {
    console.error(err)
  }
}

export const adminGetUserThunk = id => async dispatch => {
  try {
    const user = await axios.get(`/api/admin/users/${id}`)
    dispatch(adminGetUser(user))
  } catch (err) {
    console.log(err)
  }
}

export const adminEditUsersThunk = userObj => async dispatch => {
  try {
    console.log(userObj.id)
    const user = await axios.put(`/api/admin/users/${userObj.id}`, userObj)
    dispatch(adminEditUser(user))
  } catch (err) {
    console.log(err)
  }
}

//REDUCER
const defaultState = {
  allUsers: [],
  user: {}
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADMIN_GET_USERS:
      return {...state, allUsers: action.data}
    case ADMIN_GET_USER:
      return {...state, user: action.data}
    case ADMIN_EDIT_USER:
      return {...state, user: action.data}
    default:
      return state
  }
}

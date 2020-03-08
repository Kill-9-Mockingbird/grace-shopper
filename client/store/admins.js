import axios from 'axios'
//ACTION TYPES
const ADMIN_GET_USERS = 'ADMIN_GET_USERS'
const ADMIN_EDIT_USER = 'ADMIN_EDIT_USER'

//ACTION CREATORS
const adminGetUsers = users => ({type: ADMIN_GET_USERS, data: users})

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

export const adminEditUsersThunk = id => async dispatch => {
  try {
    const user = await axios.put(`/api/admin/users/${id}`)
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
      return {allUsers: action.data}
    case ADMIN_EDIT_USER:
      return {...state, ...action.data}
    default:
      return state
  }
}

import axios from 'axios'

const ADMIN_GET_USERS = 'ADMIN_GET_USERS'

const defaultUser = {}

const adminGetUsers = users => ({type: ADMIN_GET_USERS, users})

export const adminGetUsersThunk = () => async dispatch => {
  try {
    const {allUsers} = await axios.get(`/admin/users`)
    dispatch(adminGetUsers(allUsers))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultUser, action) {
  switch (action.type) {
    case ADMIN_GET_USERS:
      return {...state, allUsers: action.users}
    default:
      return state
  }
}

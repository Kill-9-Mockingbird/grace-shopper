import axios from 'axios'

//Action Types

const GET_EXPERIENCE = 'GET_EXPERIENCE'
const SELECT_EXPERIENCE = 'SELECT_EXPERIENCE'

//Initial State
const defaultExperience = {
  allExperiences: [],
  singleExperience: {
    celebrity: []
  }
}

//Action Creators
const getExperience = experience => ({
  type: GET_EXPERIENCE,
  experience
})

const selectExperience = experience => ({
  type: SELECT_EXPERIENCE,
  experience
})

//Thunk Creators
//Thunk for getting all experiences
export const fetchExperience = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/experiences')
    dispatch(getExperience(data))
  } catch (error) {
    console.error(error)
  }
}
//Thunk for getting single experience
export const fetchSingleExperience = experienceId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/experiences/${experienceId}`)
    dispatch(selectExperience(data))
  } catch (error) {
    console.error(error)
  }
}

//Reducer
export default function(state = defaultExperience, action) {
  switch (action.type) {
    case GET_EXPERIENCE:
      return {...state, allExperiences: action.experience}
    case SELECT_EXPERIENCE:
      return {
        ...state,
        singleExperience: {...action.experience}
      }
    default:
      return state
  }
}

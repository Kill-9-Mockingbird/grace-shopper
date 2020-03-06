import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Carousel} from './carousel'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName} = props

  return (
    <div>
      <div className="welcome">Welcome, {firstName}!</div>
      <Carousel />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.user.firstName
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

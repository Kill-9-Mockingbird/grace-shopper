import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'

class SignUpForm extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <label htmlFor="firstName">First Name:</label>
        <input name="firstName" type="text" />
        <label htmlFor="lastName">Last Name:</label>
        <input name="lastName" type="text" />
        <label htmlFor="username">Username:</label>
        <input name="username" type="username" />
        <label htmlFor="email">Email:</label>
        <input name="email" type="text" />
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" />
        <br />
        <button type="submit">Sign Up</button>
      </div>
    )
  }
}

export default SignUpForm
// export default connect(mapState, mapDispatch)(SignUpForm)

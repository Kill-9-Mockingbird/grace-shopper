import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <div className="signupHeader">Sign Up</div>
      <form className="loginForm" onSubmit={handleSubmit} name={name}>
        {name === 'signup' ? (
          <div className="nameField">
            <div className="inputField">
              <label htmlFor="firstName" />
              <input placeholder="First Name" name="firstName" type="text" />
            </div>
            <div className="inputField">
              <label htmlFor="lastName" />
              <input placeholder="Last Name" name="lastName" type="text" />
            </div>
          </div>
        ) : null}
        <div className="authField">
          <div className="inputField">
            <label htmlFor="email" />
            <input placeholder="Email" name="email" type="text" />
          </div>
          <div className="inputField">
            <label htmlFor="password" />
            <input placeholder="Password" name="password" type="password" />
          </div>
          <div />
          <button className="signOrLog" type="submit">
            {displayName}
          </button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a className="googleAuth" href="/auth/google">
        {displayName} with Google
      </a>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatchSignup = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value

      dispatch(auth(email, password, formName, firstName, lastName))
    }
  }
}

const mapDispatchLogin = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value

      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatchLogin)(AuthForm)
export const Signup = connect(mapSignup, mapDispatchSignup)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}

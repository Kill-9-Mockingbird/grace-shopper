import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const NotLoggedIn = () => (
  <div>
    {/* The navbar will show these links before you log in */}
    <Link to="/experiences">Experiences</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
    <Link to="/cart">Cart</Link>
  </div>
)

const LoggedIn = props => (
  <div>
    {/* The navbar will show these links after you log in */}
    <Link to="/home">Home</Link>
    <Link to="/experiences">Experiences</Link>
    <Link to="/cart">Cart</Link>
    <a href="#" onClick={props.handleClick}>
      Logout
    </a>
  </div>
)

const Admin = props => (
  <div>
    {/* The navbar will show these links after admins log in */}
    <Link to="/home">Home</Link>
    <Link to="/experiences">Experiences</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/admin">Admin</Link>
    <a href="#" onClick={props.handleClick}>
      Logout
    </a>
  </div>
)

const Navbar = props => {
  let navRoutes = () => {
    if (props.isAdmin) {
      return <Admin handleClick={props.handleClick} />
    } else if (props.isLoggedIn) {
      return <LoggedIn handleClick={props.handleClick} />
    } else {
      return <NotLoggedIn />
    }
  }
  return (
    <div className="navbar">
      <h1 className="logo">
        <Link to="/">FameX</Link>
      </h1>
      <nav>{navRoutes()}</nav>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  function handleClick() {
    dispatch(logout())
  }
  return {
    handleClick
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
}

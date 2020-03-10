import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[700]
        : theme.palette.grey[200]
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}))

const NotLoggedIn = () => (
  <div>
    {/* The navbar will show these links before you log in */}
    <Link
      variant="button"
      color="textPrimary"
      to="/experiences"
      component={RouterLink}
      className={useStyles().link}
    >
      Experiences
    </Link>
    <Link
      variant="button"
      color="textPrimary"
      component={RouterLink}
      to="/cart"
      className={useStyles().link}
    >
      Cart
    </Link>
    <Link
      variant="button"
      color="textPrimary"
      component={RouterLink}
      to="/signup"
      className={useStyles().link}
    >
      Sign Up
    </Link>
    <Button
      component={RouterLink}
      to="/login"
      color="primary"
      variant="outlined"
      className={useStyles().link}
    >
      Login
    </Button>
  </div>
)

const LoggedIn = props => (
  <div>
    {/* The navbar will show these links after you log in */}

    <Link
      variant="button"
      color="textPrimary"
      component={RouterLink}
      to="/home"
      className={useStyles().link}
    >
      Home
    </Link>
    <Link
      variant="button"
      color="textPrimary"
      component={RouterLink}
      to="/experiences"
      className={useStyles().link}
    >
      Experiences
    </Link>
    <Link
      variant="button"
      color="textPrimary"
      component={RouterLink}
      to="/cart"
      className={useStyles().link}
    >
      Cart
    </Link>
    <Button
      component={RouterLink}
      to="#"
      color="primary"
      variant="outlined"
      className={useStyles().link}
      onClick={props.handleClick}
    >
      Logout
    </Button>
  </div>
)

const Admin = props => (
  <div>
    {/* The navbar will show these links after admins log in */}
    <Link
      variant="button"
      color="textPrimary"
      component={RouterLink}
      to="/home"
      className={useStyles().link}
    >
      Home
    </Link>
    <Link
      variant="button"
      color="textPrimary"
      component={RouterLink}
      to="/experiences"
      className={useStyles().link}
    >
      Experiences
    </Link>
    <Link
      variant="button"
      color="textPrimary"
      component={RouterLink}
      to="/cart"
      className={useStyles().link}
    >
      Cart
    </Link>
    <Link
      variant="button"
      color="textPrimary"
      component={RouterLink}
      to="/admin"
      className={useStyles().link}
    >
      Admin
    </Link>
    <Button
      component={RouterLink}
      to="#"
      color="primary"
      variant="outlined"
      className={useStyles().link}
      onClick={props.handleClick}
    >
      Logout
    </Button>
  </div>
)

const Navbar = props => {
  const classes = useStyles()
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
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.toolbarTitle}>
          <Link
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            FameX
          </Link>
        </Typography>
        <nav>{navRoutes()}</nav>
      </Toolbar>
    </AppBar>
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

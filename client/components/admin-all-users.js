import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {adminGetUsersThunk} from '../store/admins'

export class AdmAllUsers extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.adminGetUsersThunk()
  }
  render() {
    //still need to get users
    console.log('this is props', this.props)
    console.log('this is state', this.state)
    return <div className="usersBlock">These are all users.</div>
  }
}

const mapStateToProps = state => {
  return {
    allUsers: state.admins.allUsers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    adminGetUsersThunk: () => {
      dispatch(adminGetUsersThunk())
    }
  }
}

export const ConnectedAdminAllUsers = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdmAllUsers)

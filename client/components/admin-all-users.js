import React, {Component} from 'react'
import {connect} from 'react-redux'
import {adminGetUsersThunk} from '../store/admins'
import {ConnectedEditUsers} from './admin-edit-user'

export class AdmAllUsers extends Component {
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleEdit(e) {
    let user = e.target.user
    return <ConnectedEditUsers user={user} />
  }

  handleDelete(e) {
    let userId = e.target.userId
  }

  componentDidMount() {
    this.props.adminGetUsersThunk()
  }
  render() {
    const users = this.props.allUsers.data
    return users ? (
      <div className="usersBlock">
        {users.map(user => {
          return (
            <div key={user.id}>
              <div className="userBlock">
                <img className="userProfile" src={user.profilePictureUrl} />

                <div className="userText">
                  <div className="userName">
                    {user.firstName} {user.lastName}
                  </div>
                  <br />
                  <small className="userContact">
                    Email: {user.email}
                    <br />
                    Phone: {user.phoneNumber}
                  </small>
                  <div className="addressInfo">
                    <small className="infoCategory">Address:</small>
                    <small className="infoBody">
                      {user.streetAddress} <br />
                      {user.secondaryAddress} <br />
                      {user.county}, {user.state} {user.zipCode} <br />
                      {user.googleId}
                    </small>
                  </div>
                  <small>Date of Birth: {user.dateOfBirth}</small>
                  <div className="addressInfo">
                    <small className="infoCategory">Emergency Contact:</small>
                    <small className="infoBody">
                      {user.emergencyContactName} <br />
                      {user.emergencyContactPhone} <br />
                    </small>
                  </div>
                  <button
                    user={user}
                    onClick={this.handleEdit}
                    className="editUser"
                  >
                    Edit User
                  </button>
                  <button
                    userId={user.id}
                    onClick={this.handleDelete}
                    className="editUser"
                  >
                    Delete User
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    ) : (
      <div>Loading</div>
    )
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

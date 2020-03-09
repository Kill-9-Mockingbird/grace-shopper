import React, {Component} from 'react'
import {connect} from 'react-redux'
import {adminEditUsersThunk, adminGetUserThunk} from '../store/admins'
import {Popup} from './admin-popup-edit-success'

export class EditUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.user
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.adminGetUserThunk(this.props.match.params.userId)
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.user.data === undefined) {
      this.setState({
        ...this.props.user.data
      })
    }
  }

  handleChange(e) {
    console.log(this.state)
    this.setState({
      ...this.state,

      [e.target.id]: e.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    let user = this.state
    console.log(user)
    this.props.adminEditUsersThunk(this.state)
    return <Popup text="Update Successful" />
  }

  render() {
    const user = this.props.user.data
    console.log(this.state)
    return user ? (
      <div>
        <h2>Edit User:</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              type="text"
              defaultValue={user.firstName}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              type="text"
              defaultValue={user.lastName}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="text"
              defaultValue={user.email}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone:</label>
            <input
              id="phone"
              type="text"
              defaultValue={user.phoneNumber}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="streetAddress">Street Address:</label>
            <input
              id="streetAddress"
              type="text"
              defaultValue={user.streetAddress}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="secondaryAddress">Secondary Address:</label>
            <input
              id="secondaryAddress"
              type="text"
              defaultValue={user.secondaryAddress}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="county">County:</label>
            <input
              id="county"
              type="text"
              defaultValue={user.county}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input
              id="state"
              type="text"
              defaultValue={user.state}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip Code:</label>
            <input
              id="zipCode"
              type="text"
              defaultValue={user.zipCode}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              id="country"
              type="text"
              defaultValue={user.country}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profilePictureUrl">Profile Picture URL:</label>
            <input
              id="profilePictureUrl"
              type="text"
              defaultValue={user.profilePictureUrl}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              id="dateOfBirth"
              type="text"
              defaultValue={user.dateOfBirth}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emergencyContactName">
              Emergency Contact Name:
            </label>
            <input
              id="emergencyContactName"
              type="text"
              defaultValue={user.emergencyContactName}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emergencyContactPhone">
              Emergency Contact Phone:
            </label>
            <input
              id="emergencyContactPhone"
              type="text"
              defaultValue={user.emergencyContactPhone}
              className="input-item"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="isAdmin">Is Admin:</label>
            <select
              id="isAdmin"
              name="isAdmin"
              className="input-item"
              value={this.state.emergencyContactPhone}
              onChange={this.handleChange}
            >
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
          </div>
          <button
            type="submit"
            className="addButton"
            onClick={this.handleSubmit}
          >
            Submit Changes
          </button>
          {this.state.showPopup ? (
            <Popup
              text="Click &quot;Close Button&quot; to hide popup"
              closePopup={this.togglePopup.bind(this)}
            />
          ) : null}
        </form>
      </div>
    ) : (
      <div>Loading</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.admin.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    adminEditUsersThunk: userId => {
      dispatch(adminEditUsersThunk(userId))
    },
    adminGetUserThunk: userId => {
      dispatch(adminGetUserThunk(userId))
    }
  }
}

export const ConnectedEditUser = connect(mapStateToProps, mapDispatchToProps)(
  EditUser
)

import React, {Component} from 'react'
import {connect} from 'react-redux'

class EditUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      secondaryAddress: '',
      county: '',
      state: '',
      zipCode: '',
      country: '',
      profilePictureUrl: '',
      dateOfBirth: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      isAdmin: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.onAddProject(this.state)
    this.setState({
      title: '',
      deadline: '',
      priority: '',
      completed: '',
      description: '',
      imageUrl: ''
    })
  }
  render() {
    return (
      <div>
        <h1>Edit User:</h1>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="input-item"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">First Name:</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="input-item"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

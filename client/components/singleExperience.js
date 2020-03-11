import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleExperience} from '../store/experience'
import {addItemThunk, addItemForGuest} from '../store/cart'
import {SingleExp} from './SingleExp'

export default class SingleExperience extends React.Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount() {
    const experienceId = this.props.match.params.experienceId
    this.props.fetchSingleExperience(experienceId)
  }

  handleAdd(id) {
    this.props.isLoggedIn && this.props.addItemThunk(id)
    !this.props.isLoggedIn && this.props.addItemForGuest(id)
    alert('Added to cart')
  }

  render() {
    const experience = this.props.singleExperience
    const celebrity = experience.celebrity

    return (
      <div>
        <SingleExp
          key={experience.id}
          experience={experience}
          celebrity={celebrity}
          handleAdd={this.handleAdd}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleExperience: state.experience.singleExperience,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleExperience: experienceId => {
      dispatch(fetchSingleExperience(experienceId))
    },
    addItemThunk: experience => {
      dispatch(addItemThunk(experience))
    },
    addItemForGuest: experienceId => {
      dispatch(addItemForGuest(experienceId))
    }
  }
}

export const ConnectedSingleExperience = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleExperience)

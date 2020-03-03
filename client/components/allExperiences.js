import React from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
import {fetchExperience} from '../store/experience'

export default class AllExperiences extends React.Component {
  componentDidMount() {
    this.props.fetchExperience()
  }
  render() {
    return (
      <div>
        {this.props.allExperiences.map(experience => {
          return (
            <div key={experience.id}>
              <img src={experience.imageUrl} />
              <ul>
                <li>{experience.name}</li>
                <li>Details: {experience.description}</li>
                <li>
                  Location: {experience.city}, {experience.state}
                </li>
                <li>Duration: {experience.duration}</li>
                <li>Group Size: {experience.groupSize}</li>
                <li>${experience.price}</li>
                <button type="button">Add To Cart</button>
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    allExperiences: state.experience.allExperiences
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchExperience: () => {
      dispatch(fetchExperience())
    }
  }
}

export const ConnectedAllExperiences = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllExperiences)

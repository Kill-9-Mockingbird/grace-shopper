import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
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
                <li>
                  <Link to={`/experiences/${experience.id}`}>
                    {experience.name}
                  </Link>
                </li>
                <li>
                  Host:
                  <Link to={`/celebrity/${experience.celebrity.id}`}>
                    {' '}
                    {experience.celebrity.name}
                  </Link>
                </li>
                <li>
                  Location: {experience.city}, {experience.state}
                </li>
                <li>Group Size: {experience.groupSize} pax</li>
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

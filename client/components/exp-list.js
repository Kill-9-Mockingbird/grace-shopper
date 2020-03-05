import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchExperience} from '../store/experience'

class ExpList extends React.Component {
  componentDidMount() {
    this.props.fetchExperience()
  }
  render() {
    return (
      <div>
        <div className="expBlock">
          {this.props.allExperiences.map(experience => {
            return (
              <div key={experience.id}>
                <div className="indExp">
                  <Link
                    to={`/experiences/${experience.id}`}
                    className="expTitle"
                  >
                    <span className="expName">{experience.name} with</span>

                    <span className="celebName">
                      {experience.celebrity.name}
                    </span>
                  </Link>
                  <img className="imgThumb" src={experience.imageUrl} />
                </div>
              </div>
            )
          })}
        </div>
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

export const ConnectedExpList = connect(mapStateToProps, mapDispatchToProps)(
  ExpList
)

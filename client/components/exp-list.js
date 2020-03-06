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
                <Link to={`/experiences/${experience.id}`} className="expTitle">
                  <div className="indExp">
                    <span>{experience.name}</span>

                    <span className="celebName">
                      with {experience.celebrity.name}
                    </span>
                    <img className="imgThumb" src={experience.imageUrl} />
                  </div>
                </Link>
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

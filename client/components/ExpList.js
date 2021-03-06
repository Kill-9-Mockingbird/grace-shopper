import React from 'react'
import {connect} from 'react-redux'
import {fetchExperience} from '../store/experience'
import {Grid, Typography, Container} from '@material-ui/core'
import {ExpCard} from './ExpCard'

class ExpList extends React.Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount() {
    this.props.fetchExperience()
  }
  handleAdd(e) {
    const id = e.target.id
    this.props.isLoggedIn && this.props.addItemThunk(id)
    !this.props.isLoggedIn && this.props.addItemForGuest(id)
  }

  render() {
    return (
      <Container maxWidth="md" align="center">
        <Typography variant="h4">
          <br />
          Current Experiences
        </Typography>
        <br />
        <br />
        <Grid container spacing={3}>
          {this.props.allExperiences.map(e => {
            return <ExpCard key={e.id} experience={e} />
          })}
        </Grid>
      </Container>
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

import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import {Link as RouterLink} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}))

export const ExpCard = props => {
  const {experience} = props
  return (
    <Grid item key={experience.id} xs={12} sm={6} md={4}>
      <Card className={useStyles().card}>
        <CardMedia
          className={useStyles().cardMedia}
          image={experience.imageUrl}
          title={experience.name}
        />
        <CardContent className={useStyles().cardContent}>
          <Typography gutterBottom variant="h5" component="h4">
            {experience.name}
          </Typography>
          <Typography>with {experience.celebrity.name}</Typography>
        </CardContent>
        <CardActions className={useStyles().buttons}>
          <Button
            color="primary"
            size="small"
            variant="outlined"
            component={RouterLink}
            to={`/experiences/${experience.id}`}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

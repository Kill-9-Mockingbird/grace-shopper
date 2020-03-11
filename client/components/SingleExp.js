import React from 'react'
import {
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  makeStyles,
  Container,
  CssBaseline
} from '@material-ui/core/'

import {Link as RouterLink} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  description: {
    maxWidth: '80%',
    alignSelf: 'center'
  }
}))

export const SingleExp = props => {
  const classes = useStyles()
  const {experience, celebrity, handleAdd} = props

  return (
    <React.Fragment>
      <CssBaseline />
      <main key={experience.id}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Card className={classes.card}>
              <CardMedia
                image={experience.imageUrl}
                className={classes.cardMedia}
              />
              <br />
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
              >
                {experience.name}
              </Typography>
              <Typography
                component="h4"
                variant="h4"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                with {celebrity.name}
              </Typography>
              <Typography variant="subtitle2" align="center">
                <strong>Location</strong>: {experience.city}, {experience.state}
                <br />
                <strong>Duration</strong>: {experience.duration}
                <br />
                <strong>Group Size</strong>: {experience.groupSize}
                <br />
                <strong>Price</strong>: ${experience.price}
              </Typography>
              <br />
              <Typography
                variant="body1"
                align="center"
                color="textSecondary"
                className={classes.description}
                paragraph
              >
                {experience.description}
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      component={RouterLink}
                      to="/experiences"
                    >
                      Go Back
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      id={experience.id}
                      onClick={() => {
                        handleAdd(experience.id)
                      }}
                    >
                      Add To Cart
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <br />
            </Card>
          </Container>
        </div>
      </main>
    </React.Fragment>
  )
}

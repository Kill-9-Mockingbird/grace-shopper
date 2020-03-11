import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Paper,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container
} from '@material-ui/core'
import {Link as LinkRouter} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  banner: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 325
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  headline: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 150,
    paddingLeft: 40
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 225
  },
  card: {
    height: '100%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'row'
  }
}))

export function Carousel() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Paper
        className={classes.banner}
        style={{
          backgroundImage: `url("https://weekiwachee.com/wp-content/uploads/sites/16/2019/04/kayaking_58021358_1050x600.jpg")`
        }}
      >
        <div className={classes.overlay} />
        <Grid container justify="center" align="center">
          <Grid item md={6}>
            <div className={classes.headline}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Live Your Best Life
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                With Your Favorite Celebrities
              </Typography>
              <br />
              <br />
              <Button variant="contained" color="secondary">
                Shop Now
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Container maxWidth="md" align="center" className={classes.content}>
        <Typography variant="h4" gutterBottom>
          Our Top Experiences
        </Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card className={useStyles().card}>
              <CardMedia
                image="https://kokatat.com/images/550marquees/B_florida_keys-1-19.jpg"
                title="Kayak with Beyonce"
                className={useStyles().cover}
              />
              <div>
                <CardContent className={useStyles().details}>
                  <Typography variant="h5">
                    <strong>Kayak the Florida Keys</strong>
                  </Typography>
                  <Typography variant="subtitle2">
                    <em>
                      with Beyoncé
                      <br />
                      and Renee
                    </em>
                  </Typography>
                  <br />
                  <br />

                  <div className={useStyles().button}>
                    <Button
                      size="small"
                      variant="text"
                      color="secondary"
                      to="/experiences"
                      component={LinkRouter}
                    >
                      See More
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={useStyles().card}>
              <CardMedia
                image="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200124105026-james-corden-carpool-karaoke.jpg"
                title="Flip a Car"
                className={useStyles().cover}
              />
              <div>
                <CardContent className={useStyles().details}>
                  <Typography variant="h5">
                    <strong>Flip over James Cordon's Car</strong>
                  </Typography>
                  <Typography variant="subtitle2">
                    <em>
                      with Derek Jeter
                      <br />
                      and Esther
                    </em>
                  </Typography>
                  <br />
                  <br />

                  <div className={useStyles().button}>
                    <Button
                      size="small"
                      variant="text"
                      color="secondary"
                      to="/experiences"
                      component={LinkRouter}
                    >
                      See More
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={useStyles().card}>
              <CardMedia
                image="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/10/16145025/FTeam_and_Sire_Clean-min-min.jpg"
                title="Play with Shibas"
                className={useStyles().cover}
              />
              <div>
                <CardContent className={useStyles().details}>
                  <Typography variant="h5">
                    <strong>Play With Shiba Inus</strong>
                  </Typography>
                  <Typography variant="subtitle2">
                    <em>
                      with Christiano Ronaldo
                      <br />
                      and Stacey
                    </em>
                  </Typography>
                  <br />
                  <br />

                  <div className={useStyles().button}>
                    <Button
                      size="small"
                      variant="text"
                      color="secondary"
                      to="/experiences"
                      component={LinkRouter}
                    >
                      See More
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={useStyles().card}>
              <CardMedia
                image="https://i.insider.com/5d24c2d4a17d6c0c722860c3?width=1100&format=jpeg&auto=webp"
                title="Flip a Car"
                className={useStyles().cover}
              />
              <div>
                <CardContent className={useStyles().details}>
                  <Typography variant="h5">
                    <strong>Explore Mars</strong>
                  </Typography>
                  <Typography variant="subtitle2">
                    <em>
                      with Taylor Swift
                      <br />
                      and Sonia
                    </em>
                  </Typography>
                  <br />
                  <br />

                  <div className={useStyles().button}>
                    <Button
                      size="small"
                      variant="text"
                      color="secondary"
                      to="/experiences"
                      component={LinkRouter}
                    >
                      See More
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

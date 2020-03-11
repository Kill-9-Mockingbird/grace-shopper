import React from 'react'
import {
  Button,
  makeStyles,
  Typography,
  Card,
  CardMedia,
  CardContent
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    // height: 200,
    paddingLeft: 30
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 200
    // height: 200
  },
  card: {
    height: '100%',
    maxWidth: 600,
    display: 'flex',
    flexDirection: 'row'
  }
}))

const CartItems = props => {
  const {experience, handleRemove, increase, decrease, orderId} = props

  return experience.name ? (
    <Card key={experience.id} className={useStyles().card}>
      <CardMedia
        image={experience.imageUrl}
        title={experience.name}
        className={useStyles().cover}
      />
      <div>
        <CardContent className={useStyles().details}>
          <Typography variant="h6">
            <strong>{experience.name}</strong>
          </Typography>
          <Typography variant="subtitle2">
            <em>with {experience.celebrity.name}</em>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            ${experience.price}
          </Typography>
          <br />
          <div className="quantity">
            {experience.orderDetail.packageQty <= 1 ? (
              <i
                className="fas fa-minus"
                onClick={() => handleRemove(`${experience.id}`, event)}
              />
            ) : (
              <i
                className="fas fa-minus"
                onClick={() => {
                  decrease(orderId, experience.id)
                }}
              />
            )}
            <Typography variant="subtitle2">
              Quantity: {experience.orderDetail.packageQty}
            </Typography>
            <i
              className="fas fa-plus"
              onClick={() => {
                increase(orderId, experience.id)
              }}
            />
          </div>
          <br />
          <Typography variant="subtitle2">
            <strong>Total Price</strong>: $
            {experience.price * experience.orderDetail.packageQty}
          </Typography>

          <div className={useStyles().button}>
            <Button
              size="small"
              variant="text"
              color="secondary"
              onClick={event => {
                handleRemove(`${experience.id}`, event)
              }}
            >
              Delete Item
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  ) : (
    <Typography variant="subtitle2">Loading...</Typography>
  )
}

export default CartItems

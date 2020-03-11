import React from 'react'

const CartItems = props => {
  const {experience, handleRemove, increase, decrease, orderId} = props

  return experience.name ? (
    <div className="cart-container">
      <div className="cartItems">
        <img className="thumbnail" src={experience.imageUrl} />
        <p>Name: {experience.name}</p>
        <p>Hosted By: {experience.celebrity.name}</p>
        <p>Price: ${experience.price}</p>
        <div className="quantity">
          {/* if qty is 1, clicking - will remove item from the cart
        otherwise, it will just decrement*/}
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
          Quantity: {experience.orderDetail.packageQty}
          <i
            className="fas fa-plus"
            onClick={() => {
              increase(orderId, experience.id)
            }}
          />
        </div>
        <br />
        <p>
          Total Price: ${experience.price * experience.orderDetail.packageQty}
        </p>
        <br />
        <br />
      </div>
      <button
        type="button"
        onClick={event => {
          handleRemove(`${experience.id}`, event)
        }}
      >
        Delete Item
      </button>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default CartItems

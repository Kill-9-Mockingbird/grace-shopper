import React from 'react'

const CartItems = props => {
  const {
    experience,
    handleRemove,
    handleCheckout,
    handleSubmitQuantityUpdate
  } = props
  // const {isFetching} = props;

  console.log(experience.name)
  return !experience.name ? (
    'Loading...'
  ) : (
    <div>
      <img className="thumbnail" src={experience.imageUrl} />
      <p>Name: {experience.name}</p>
      <p>Hosted By: {experience.celebrity.name}</p>
      <p>Price: ${experience.price}</p>
      <p>Quantity: {experience.orderDetail.packageQty}</p>
      {/* <form
        onSubmit={event => {
          handleSubmitQuantityUpdate(`${experience.id}`, event)
        }}
      > */}
      {/* <label>
          Update Quantity:
          <input type="text" name="packageQty" onChange=
          {handleChangeQuantityUpdate}
          value={this.state.packageQty}
          />
        </label> */}
      <select>
        <option name="packageQty" value="1" defaultValue>
          1
        </option>
        <option name="packageQty" value="2">
          2
        </option>
        <option name="packageQty" value="3">
          3
        </option>
      </select>
      <button type="submit">Update Cart</button>
      {/* </form> */}

      <button
        type="button"
        onClick={event => {
          handleRemove(`${experience.id}`, event)
        }}
      >
        Remove Item
      </button>
      <button
        type="button"
        onClick={event => {
          handleCheckout(event)
        }}
      >
        Checkout
      </button>
      <br />
      <br />
    </div>
  )
}

export default CartItems

import React from 'react'

const CartItems = props => {
  const {experience, handleRemove} = props
  return (
    <div key={experience.id}>
      <p>Name: {experience.name}</p>
      <img src={experience.imageUrl} />
      <p>Hosted By: {experience.celebrity.name}</p>
      <p>Description: {experience.description}</p>
      <p>
        Location: {experience.city},{experience.state}
      </p>
      <p>Duration: {experience.duration} hour(s)</p>
      <p>Price: ${experience.price}</p>
      <button
        type="button"
        onClick={event => {
          handleRemove(`${experience.id}`, event)
        }}
      >
        Remove Item
      </button>
    </div>
  )
}

export default CartItems

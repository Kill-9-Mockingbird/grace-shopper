import React from 'react'

export const adminHome = props => {
  return (
    <div className="maincontainer">
      <div className="editAdmin">
        <img src="https://static1.squarespace.com/static/54b7b93ce4b0a3e130d5d232/54e20ebce4b014cdbc3fd71b/5a992947e2c48320418ae5e0/1519987239570/icon.png" />
        <a className="editTitle" href="/admin/users">
          View and Edit Users
        </a>
      </div>
      <div className="editAdmin">
        <img src="https://media.tripcentral.ca/media/00_0X_Q0_vacation-packages-jamaica.png" />
        <a className="editTitle" href="/admin/experiences">
          View and Manage Experiences
        </a>
      </div>
      <div className="editAdmin">
        <img src="https://cdn1.iconfinder.com/data/icons/user-female/64/Payment-Credit-User-Female-Profile-Avatar-512.png" />
        <a className="editTitle" href="/admin/paymentTypes">
          View and Edit Payment Types
        </a>
      </div>
      <div className="editAdmin">
        <img src="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/celebrity-matrix-trinity-512.png" />
        <a className="editTitle" href="/admin/celebrities">
          View and Edit Celebrities
        </a>
      </div>
    </div>
  )
}

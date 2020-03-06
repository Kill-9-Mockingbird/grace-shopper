import React from 'react'

import {Navbar, ConnectedCart} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <ConnectedCart />
      <Routes />
    </div>
  )
}

export default App

import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import SignupForm from './components/signup-form'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <SignupForm />
    </div>
  )
}

export default App

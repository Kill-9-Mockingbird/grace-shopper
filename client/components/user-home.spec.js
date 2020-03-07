/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserHome} from './user-home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHome', () => {
  let userHome

  beforeEach(() => {
    userHome = shallow(<UserHome firstName="Cody" />)
  })

  it('renders the first name correctly', () => {
    expect(userHome.find('.welcome').text()).to.be.equal('Welcome, Cody!')
  })
})

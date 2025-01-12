// eslint-disable-next-line no-unused-vars
import React from 'react'
import Collection from '../components/Collection'
import Hero from '../components/Hero'
// TODO : Check The hero is Availblbe onlanding page and Home page then reomve this import
const Home = () => {
  return (
    <div>
      <Hero/>
      <Collection/>
    </div>
  )
}

export default Home
import React from 'react'
import Hero from './components/Hero/Hero'
import WhyChooseUs from './components/Why Choose Us/WhyChooseUs'
import SubscriptionPlans from './components/Subscription Plans/SubscriptionPlans'
import BoostVenues from './components/Boost Venues/BoostVenues'
import Properties from './components/Properties/Properties'

const Landing = () => {
  return (
    <div className='overflow-x-hidden'>
        <Hero />
        <WhyChooseUs/>
        <SubscriptionPlans/>
        <BoostVenues/>
        <Properties/>
    </div>
  )
}

export default Landing
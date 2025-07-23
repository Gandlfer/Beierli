import React from 'react'
import NavBar from '../components/NavBar'
import CompanyProfile from '../components/CompanyProfile'
import HomeHeader from '../components/HomeHeader'
import CompanyCulture from '../components/CompanyCulture'
import Contacts from '../components/Contacts'

const HomePage = () => {
  return (
    <div>
      <HomeHeader/>
      <CompanyProfile/>
      <CompanyCulture/>
      <Contacts/>
    </div>
  )
}

export default HomePage

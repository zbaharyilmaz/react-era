import React from 'react'
import Slider from '../components/Slider'
import Buton from '../components/Buton'
import Teacher from './Teacher'
import CourseCard from './CourseCard'

const Home = () => {
  return (
    <div>
    
      <Slider/>
      <Buton/>
      <Teacher/>
      <CourseCard/>
    </div>
  )
}

export default Home
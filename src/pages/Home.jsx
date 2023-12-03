import React from 'react'
import MainLayouts from '../layouts/MainLayouts'
import MyButton from '../MyButton'

const Home = () => {
  return (
  <MainLayouts>
     <div className="mt-4 p-5 bg-secondary text-white rounded">
        <h1>PHAWIDA ...</h1>
        <p>Lorem ipsum...</p>
      </div>
      <MyButton text="p" color="info"/>
      <MyButton text="h" color="primary"/>
      <MyButton text="a" color="secondary"/>
  </MainLayouts>
  )
}

export default Home
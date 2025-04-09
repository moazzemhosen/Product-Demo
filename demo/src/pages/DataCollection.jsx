import React from 'react'
import Navbar from '../components/Navbar'
import DatacollectionCard from '../components/DatacollectionCard'
import Float from './Float'

const DataCollection = () => {
  return (
    <div className="bg-gray-100 bg-[url('image33.jpg')] bg-cover bg-center bg-no-repeat min-h-screen" >
    <Navbar />
    <div className="pt-33">
      {/*  for background- <h1 className="bg-gray-100 min-h-screen mt-33 bg-[url('image33.jpg')] bg-cover bg-center bg-no-repeat min-h-screen"></h1> */}
      <DatacollectionCard />
    </div>
    <Float/>
  </div>
  )
}

export default DataCollection
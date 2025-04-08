import React from 'react'
import Navbar from '../components/Navbar'
import DatacollectionCard from '../components/DatacollectionCard'

const DataCollection = () => {
  return (
    <div>
    <Navbar />
    <div className="flex">
      <h1 className="mb-8 text-3xl font-bold"></h1>
      <DatacollectionCard />
    </div>
  </div>
  )
}

export default DataCollection
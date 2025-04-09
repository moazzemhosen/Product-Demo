import React from 'react'
import Navbar from '../components/Navbar'
import DatacollectionCard from '../components/DatacollectionCard'
import Float from './Float'

const DataCollection = () => {
  return (
    <div className='bg-cover bg-center h-screen'
    style={{backgroundImage:"url('imag2.png')"}}
    >
    <Navbar />
    <div className="flex">
      <h1 className="mb-8 text-3xl font-bold"></h1>
      <DatacollectionCard />
    </div>
    <Float/>
  </div>
  )
}

export default DataCollection
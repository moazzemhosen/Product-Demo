import React from 'react'
import { Link } from 'react-router-dom'

const DataCollectionEachCard = ({data}) => {
  return (
    <Link to={data.link} className="max-w-full bg-white border border-gray-200 shadow-sm rounded-md p-4 flex gap-4 items-start">
            <div className="bg-blue-100 p-2 rounded-full">
                {/* <BellIcon className="h-6 w-6 text-blue-600" /> */}
            </div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800">{data.Title}</h2>
             
            </div>
        </Link>
  )
}

export default DataCollectionEachCard
import React from 'react'
import { Link } from 'react-router-dom'

const Hcard = ({ data }) => {
 
    return (
        <Link to={data.link} className="max-w-full bg-white border border-gray-200 shadow-sm rounded-md p-4 flex gap-4 items-start">
            <div className="bg-blue-100 p-2 rounded-full">
                {/* <BellIcon className="h-6 w-6 text-blue-600" /> */}
            </div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800">{data.Name}</h2>
                <p className="text-sm text-gray-600 mt-1">
                    {data.Details}
                </p>
            </div>
        </Link>
    )
}

export default Hcard
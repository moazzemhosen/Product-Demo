import React from 'react'
import { FaDatabase, FaUsers } from 'react-icons/fa'
import { HiDotsCircleHorizontal } from 'react-icons/hi'
import {  MdSpaceDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Hcard = ({ data,id }) => {
 const icon =[<FaDatabase/>,<MdSpaceDashboard />,<FaUsers />,<HiDotsCircleHorizontal /> ]
    return (
        <Link to={data.link} className="max-w-full min-h-30 bg-white border border-gray-200 shadow-lg rounded-md p-2 flex gap-4 items-start">
            <div className="bg-blue-100 p-4 rounded-full">
            {icon[id]}
            </div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800">{data.Name}</h2>
                <p className="text-sm text-gray-600 mt-1 p-2">
                    {data.Details}
                </p>
            </div>
        </Link>
    )
}

export default Hcard
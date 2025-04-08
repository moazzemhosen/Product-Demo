import React from 'react'
import DataCollectionEachCard from './DataCollectionEachCard'

const DatacollectionCard = () => {
    var EachCards=[{"Title":"Download Template","link":"/downloadtemplate"},
        {"Title":"Upload Data","link":"/uploaddata"},
        {"Title":"Dashboard Sanity Check","link":"/dashboardcheck"},
        {"Title":"Rules & Mapping Tables","link":"/rulesand mapping"},
    ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-10 p-60">
            {EachCards.map((card, idx) => (
                <DataCollectionEachCard key={idx} data={card}/>
            ))}
        </div>
  )
}

export default DatacollectionCard
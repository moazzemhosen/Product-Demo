import React from 'react'
import Hcard from '../pages/Hcard';

const Card = () => {
    var cards=[
        { "Name": "Data Collection", "Details": "Set up both reports and alerts which can be immediately dispatched", "link": "/dataCollection" },
        { "Name": "Reports & Dashboard", "Details": "Set up both reports and alerts which can be immediately dispatched", "link": "/reportDashboard" },
        { "Name": "User Management", "Details": "Set up both reports and alerts which can be immediately dispatched", "link": "/userManagement" },
        { "Name": "Other Section", "Details": "Set up both reports and alerts which can be immediately dispatched", "link": "/otherSection" },
      ]
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-10 p-60">
            {cards.map((card, idx) => (
                <Hcard key={idx} data={card}/>
            ))}
        </div>
    )
}

export default Card;
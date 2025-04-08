import React from 'react'
import Hcard from '../pages/Hcard';

const Card = () => {
    const cards = [
        { "Name": "Data Collection", "Details":"Gather all media data templates, upload the raw templates, conduct a sanity check to validate their structure and content, and review the mapping to ensure accurate field correspondence with our system.", "link": "/dataCollection", },
        { "Name": "Reports & Dashboard", "Details": "a summary of findings, analysis of data trends, recommendations for action, and an open forum for team feedback and collaboration.", "link": "/reportDashboard" },
        { "Name": "User Management", "Details": "creating, updating, and deleting user accounts, managing roles and permissions, and ensuring data security and compliance.", "link": "/userManagement" },
        { "Name": "Other Section", "Details": "includes additional information and resources relevant to users that do not fit into the main categories.", "link": "/otherSection" },
    ]


    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-20">
            {cards.map((card, idx) => (
                <Hcard key={idx} data={card} id={idx} />
            ))}
        </div>
    )
}

export default Card;
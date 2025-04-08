
import Navbar from '../components/Navbar';

import { useState } from 'react';
import Card from '../components/Card';
import Heading from '../components/Heading';


function HomePage() {
  const [data, setData] = useState([
    { "Name": "Data Collection", "Details": "Set up both reports and alerts which can be immediately dispatched", "link": "/dataCollection" },
    { "Name": "Data Collection", "Details": "Set up both reports and alerts which can be immediately dispatched", "link": "/reportDashboard" },
    { "Name": "Data Collection", "Details": "Set up both reports and alerts which can be immediately dispatched", "link": "/userManagement" },
    { "Name": "Data Collection", "Details": "Set up both reports and alerts which can be immediately dispatched", "link": "/otherSection" },
  ])
  return (
    <div className="bg-gray-100 min-h-screen">
      <Heading/>
      <Card/>
    </div>
  );
}

export default HomePage;

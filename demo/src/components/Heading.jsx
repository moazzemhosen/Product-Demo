import React, { useEffect, useState } from 'react'

const Heading = () => {
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
      const storedUser = sessionStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          const email = parsedUser.username;
          const namePart = email.split("@")[0]; // get 'name' from 'name@gmail.com'
          const capitalized =
            namePart.charAt(0).toUpperCase() + namePart.slice(1);
          setDisplayName(capitalized);
        } catch (error) {
          console.error("Error parsing user from session storage:", error);
        }
      }
    }, []);
  return (
    <div className="bg-white p-6">
      <h1 className="text-3xl font-bold mb-2">Hello {displayName}</h1>
      <h2 className="text-xl text-gray-600 mb-4">Welcome to AXA</h2>
     
    </div>
  )
}

export default Heading
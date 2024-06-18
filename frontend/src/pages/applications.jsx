import React, { useState, useEffect } from 'react';
import Allapplications from "../components/Allapplications";

const Aplications = () => {
    const [vacature, setVacatures] = useState([]);

    useEffect(() => {
      const fetchVacatures = async () => {
        try {
          const response = await fetch("http://localhost:4000/tasks");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          
          setVacatures(data);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };

      fetchVacatures();
     
    }, []);


  return (
    <div>
      <Allapplications vac={vacature}/>
    </div>
  );
};

export default Aplications;

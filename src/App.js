import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);
  
  const fetchTour = async () => {
    try {
      const response = await fetch(url);
      const tours= response.json();
      setTours(tours);

      setLoading(false);      
      
      
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  
  } 

  useEffect(()=>{
    fetchTour();
  },[])
  
  if(loading) {
    return < Loading / >
  }
  

  return < Tours tours={tours} />
}

export default App

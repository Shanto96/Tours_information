import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);
  const removeTour =  (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);

  }
  const fetchTour = async () => {
    try {
      const response = await fetch(url);
      const tours=  await response.json();
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
  if(tours.length===0){
    return ( 
      <main>
         <h2>No tours left</h2>
         <button onClick={() => fetchTour() } className="btn">Refresh</button>
      </main>
    );
  }

  return < Tours tours={tours} removeTour= {removeTour} />
}

export default App

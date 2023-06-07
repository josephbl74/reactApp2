import { useState, useEffect } from "react";
import { NewMarkerForm } from "./NewMarkerForm";
import { MarkerList } from "./MarkerList";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./styles.css";

export default function App(){

// //------- connecting to backend: attempt 2

//   const [markers, setMarkers] = useState([])

//   useEffect(() => {
//     // Fetch markers from the backend server
//     axios.get('http://localhost:5000/api')
//       .then(response => {
//         setMarkers(response.data.markers || []);
//       })
//       .catch(error => {
//         console.error('Error fetching markers:', error);
//       });
//   }, []);

//   useEffect(() => {
//     // Update markers on the backend server whenever it changes
//     axios.post('http://localhost:5000/api', { markers })
//       .then(() => {
//         console.log('Markers updated successfully');
//       })
//       .catch(error => {
//         console.error('Error updating markers:', error);
//       });
//   }, [markers]);






  // -------- connecting to localStorage: it works

  //useEffect() runs the described function every time the array passed sa second property changes
  // allows exporting data to our local storage

  const [markers, setMarkers]=useState(() => {
    const localValue=localStorage.getItem("MARKERS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  
  useEffect(() => {
    localStorage.setItem("MARKERS", JSON.stringify(markers))
  }, [markers])




  // ------- functions

  function addMarker(title, description, website, lat, lng){
    setMarkers((currentMarkers) => [
      ...currentMarkers, 
      {id: uuidv4(), title, description, website, lat, lng, completed: false},
    ]
    );
  }
 
  function toggleMarker(id, completed) {
    setMarkers(currentMarkers =>{
      return currentMarkers.map(marker => {
        if(marker.id === id){
          return {...marker, completed}
        }
        return marker 
      })
    })
  }

  function deleteMarker(id) {
    setMarkers(currentMarkers => {
      return currentMarkers.filter(marker => marker.id !== id)
    })
  }

  // console.log(markers) 

  return (
    <>
      <NewMarkerForm onSubmit={addMarker}/>

      <h1 className="header">Markers</h1>

      <MarkerList 
        markers={markers}
        toggleMarker={toggleMarker}
        deleteMarker={deleteMarker}
      />
    </>
  )
}
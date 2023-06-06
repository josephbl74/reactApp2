import { useState, useEffect } from "react"
import { NewMarkerForm } from "./NewMarkerForm"
import { MarkerList } from "./MarkerList"
import "./styles.css"

export default function App(){

  const [markers, setMarkers]=useState(() => {
    const localValue=localStorage.getItem("MARKERS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  //useEffect() runs the described function every time the array passed sa second property changes
  // allows exporting data to our local storage
  useEffect(() => {
    localStorage.setItem("MARKERS", JSON.stringify(markers))
  }, [markers])

  function addMarker(title){
    setMarkers((currentMarkers) => [
      ...currentMarkers, 
      {id: crypto.randomUUID(), title, completed: false},
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
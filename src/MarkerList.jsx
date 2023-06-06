import { MarkerItem } from "./MarkerItem"

export function MarkerList({markers, toggleMarker, deleteMarker}){
    return (
        <ul className="list">
            {markers.length === 0 && "No Markers"}
            {markers.map(marker => {
                return (
                    <MarkerItem 
                        {...marker} 
                        key={marker.id}
                        toggleMarker={toggleMarker}
                        deleteMarker={deleteMarker}
                    />
                )
            })}
        </ul>
    )
}
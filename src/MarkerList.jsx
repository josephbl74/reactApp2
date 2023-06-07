import { MarkerItem } from "./MarkerItem";

// export function MarkerList({markers, toggleMarker, deleteMarker}){
//     return (
//         <ul className="list">
//             {markers.length === 0 && <li>No Markers</li>}
//             {markers.map(marker => {
//                 return (
//                     <MarkerItem 
//                         // {...marker} 
//                         key={marker.id}
//                         marker={marker}
//                         toggleMarker={toggleMarker}
//                         deleteMarker={deleteMarker}
//                     />
//                 )
//             })}
//         </ul>
//     )
// }



// function MarkerList({ markers, toggleMarker, deleteMarker }) {
//     return (
//       <ul>
//         {markers.map(marker => (
//           <Marker
//             key={marker.id} // Add a unique key prop
//             marker={marker}
//             toggleMarker={toggleMarker}
//             deleteMarker={deleteMarker}
//           />
//         ))}
//       </ul>
//     );
//   }

// export function MarkerList({ markers, toggleMarker, deleteMarker }) {
//     return (
//       <ul className="list">
//         {markers.length === 0 ? (
//           <li>No Markers</li>
//         ) : (
//           markers.map(marker => (
//             <MarkerItem
//               key={marker.id}
//               marker={marker}
//               toggleMarker={toggleMarker}
//               deleteMarker={deleteMarker}
//             />
//           ))
//         )}
//       </ul>
//     );
// }

// export function MarkerList({ markers, toggleMarker, deleteMarker }) {
//     return (
//       <ul className="list">
//         {markers.length === 0 ? (
//           <li>No Markers</li>
//         ) : (
//           markers.map(marker => (
//             <MarkerItem
//               key={marker.id} // Add a unique key prop based on marker's id
//               marker={marker}
//               toggleMarker={toggleMarker}
//               deleteMarker={deleteMarker}
//             />
//           ))
//         )}
//       </ul>
//     );
//   }

//   import { MarkerItem } from "./MarkerItem";

// export function MarkerList({ markers, toggleMarker, deleteMarker }) {
//   return (
//     <ul className="list">
//       {markers.length === 0 && <p>No Markers</p>}
//       {markers.map((marker) => (
//         <MarkerItem
//           key={marker.id} // Add key prop with unique identifier
//           completed={marker.completed}
//           id={marker.id}
//           title={marker.title}
//           description={marker.description}
//           toggleMarker={toggleMarker}
//           deleteMarker={deleteMarker}
//         />
//       ))}
//     </ul>
//   );
// }

export function MarkerList({ markers, toggleMarker, deleteMarker }) {
    return (
        <ul className="list">
            {markers.length === 0 ? (
            <li>No Markers</li>
            ) : (
            markers.map((marker) =>
                <MarkerItem
                key={marker.id} // Add key prop with unique identifier
                completed={marker.completed}
                id={marker.id}
                title={marker.title}
                description={marker.description}
                toggleMarker={toggleMarker}
                deleteMarker={deleteMarker}
                />
            )
            )}
        </ul>
    );
  }
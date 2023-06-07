// export function MarkerItem({ completed, id, title, description, toggleMarker, deleteMarker }) {
//     return (
//         <li key={id}>
//             <label>
//             <input
//                 type="checkbox"
//                 checked={completed}
//                 onChange={e => toggleMarker(id, e.target.checked)}
//             />
//             {title}
//             </label>
    
//             <button onClick={() => deleteMarker(id)} className="btn-open">
//             Open
//             </button>
    
//             <button onClick={() => deleteMarker(id)} className="btn">
//             Delete
//             </button>
//         </li>
//     );
// }

export function MarkerItem({ completed, id, title, description, toggleMarker, deleteMarker }) {
    return (
      <li key={id}>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleMarker(id, e.target.checked)}
          />
          {title}
        </label>
  
        <button onClick={() => deleteMarker(id)} className="btn-open">
          Open
        </button>
  
        <button onClick={() => deleteMarker(id)} className="btn">
          Delete
        </button>
      </li>
    );
  }
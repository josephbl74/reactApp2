export function MarkerItem({completed, id, title, toggleMarker, deleteMarker}){
    return (
        <li>
            <label>
                <input 
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleMarker(id, e.target.checked)}
                />
                {title}
            </label>
            <button
            onClick={() => deleteMarker(id)}
                className="btn"
            >Delete
            </button>
        </li>
    )
}
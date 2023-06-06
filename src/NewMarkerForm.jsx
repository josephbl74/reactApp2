import { useState } from "react"

export function NewMarkerForm({ onSubmit }){

    const [newMarker, setNewMarker] = useState("") // [new elem,function called]
    const [newDescription, setNewDescription] = useState("")
    const [newWebsite, setNewWebsite] = useState("")
    const [newLatitude, setNewLatitude] = useState("")
    const [newLongitude, setNewLongitude] = useState("")

    function handleSubmit(e){
        e.preventDefault()

        if (newMarker === "" || newDescription === "") return

        onSubmit(newMarker, newDescription, newWebsite, newLatitude, newLongitude)
        
        setNewMarker("")
        setNewDescription("")
        setNewWebsite("")
        setNewLatitude("")
        setNewLongitude("")
    }

    return(
        <form onSubmit={handleSubmit} className="new-marker-form">
            <div className="form-row">
                <h3 htmlFor="marker">New Marker</h3> 

                {/* marker's title input */}
                <label htmlFor="title">Title</label>
                <input 
                    value={newMarker}
                    onChange={e => setNewMarker(e.target.value)}
                    type="text"
                    id="marker"
                />

                {/* marker's description input */}
                <label htmlFor="description">Description</label>
                <input 
                    value={newDescription}
                    onChange={e => setNewDescription(e.target.value)}
                    type="text"
                    id="description"
                />

                {/* marker's website input */}
                <label htmlFor="website">Website</label>
                <input 
                    value={newWebsite}
                    onChange={e => setNewWebsite(e.target.value)}
                    type="text"
                    id="website"
                />

                {/* marker's latitude input */}
                <label htmlFor="latitude">Latitude</label>
                <input 
                    value={newLatitude}
                    onChange={e => setNewLatitude(e.target.value)}
                    type="text"
                    id="latitude"
                />

                {/* marker's longitude input */}
                <label htmlFor="longitude">Description</label>
                <input 
                    value={newLongitude}
                    onChange={e => setNewLongitude(e.target.value)}
                    type="text"
                    id="longitude"
                />
                <br></br>
            </div>
            <button className="btn-add">Add+</button>
        </form>
    )
}
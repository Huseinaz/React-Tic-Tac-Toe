import { useState } from "react"

export default function Player ({name, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing);
    }

    let palyerName = <span className="player-name">{name}</span>
    let btnCaption = "Edit" 

    if(isEditing) {
        palyerName = <input type="text" required value={name} />
        btnCaption= "Save"
    }

    return (
        <li>
            <span className="player">
              {palyerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}
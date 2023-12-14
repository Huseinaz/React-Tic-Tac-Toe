import { useState } from "react"

export default function Player ({initialName, symbol}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePalyerName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit" 

    if(isEditing) {
        editablePalyerName = <input type="text" required value={playerName} onChange={handleChange} />
        btnCaption= "Save"
    }

    return (
        <li>
            <span className="player">
              {editablePalyerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}
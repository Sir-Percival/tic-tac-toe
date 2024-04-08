import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  let playerContent = <span className="player-name">{name}</span>;
  let buttonText = "Edit";

  if (isEditing) {
    playerContent = (
      <input type="text" required value={name} onChange={handleChange} />
    );
    buttonText = "Save";
  } else {
    playerContent = <span className="player-name">{name}</span>;
    buttonText = "Edit";
  }

  return (
    <li>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

import React from "react";

const Bio = props => {
  const [homeworld, setHomeworld] = React.useState({});

  const handleHomeworld = () => {
    fetch(props.character.homeworld)
      .then(response => response.json())
      .then(data => setHomeworld(data));
  };

  return (
    <div className="bio">
      <img src="https://source.unsplash.com/random" />
      <h3>{props.character.name}</h3>
      <p>Height: {props.character.height}</p>
      <p>Mass: {props.character.mass}</p>
      <p>Hair Color: {props.character.hair_color}</p>
      <p>Eye Color: {props.character.eye_color}</p>
      <p>Birth Year: {props.character.birth_year}</p>
      <p>Gender: {props.character.gender}</p>
      <div className="buttons">
        <button className="button" onClick={handleHomeworld}>
          See Homeworld Info
        </button>
        <div className="div1" />
        <div className="div2" />
      </div>
      <p>{homeworld.name}</p>
    </div>
  );
};

export default Bio;

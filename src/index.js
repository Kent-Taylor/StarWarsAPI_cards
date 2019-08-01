import React from "react";
import ReactDOM from "react-dom";

import Bio from "./bio";

import "./styles.css";

const App = () => {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://swapi.co/api/people/").then(
        response => response.json()
      );
      setCharacters(response.results);
    };
    fetchData();
  }, []);

  const renderCharacters = () => {
    return characters.map(character => {
      return <Bio character={character} />;
    });
  };

  return <div className="App">{renderCharacters()}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

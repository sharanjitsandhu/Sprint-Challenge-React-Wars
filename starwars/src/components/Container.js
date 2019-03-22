import React from "react";
import Card from "./Card";
import "./StarWars.css";

const Container = props => {
  console.log(props);
  return (
    <div className="container">
      {props.traits.map((character, i) => {
        // another way to apply keys
        //return <Card attribute={character} key={i}/>;
        return <Card attribute={character} key={character.name} />;
      })}
    </div>
  );
};

export default Container;

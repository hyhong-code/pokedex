import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const {
      data: { id, name, type, base_experience },
    } = this.props;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-header">{name}</h2>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        ></img>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;

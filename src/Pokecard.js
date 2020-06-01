import React, { Component } from "react";
import "./Pokecard.css";
import transformId from "./helper";

class Pokecard extends Component {
  render() {
    const {
      data: { id, name, type, base_experience },
    } = this.props;
    const transformedId = transformId(id);
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-header">{name}</h2>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${transformedId}.png`}
        ></img>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;

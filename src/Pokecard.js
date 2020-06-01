import React, { Component } from "react";
import "./Pokecard.css";
import { transformId } from "./helper";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
  render() {
    const {
      data: { id, name, type, base_experience },
    } = this.props;
    const transformedId = transformId(id);
    const imgSrc = `${POKE_API}${transformedId}.png`;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-header">{name}</h2>
        <img src={imgSrc}></img>
        <div>Type: {type}</div>
        <div>EXP: {base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;

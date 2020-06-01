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
        <h1 className="Pokecard-header">{name}</h1>
        <img src={imgSrc}></img>
        <div className="Pokdcard-data">Type: {type}</div>
        <div className="Pokdcard-data">EXP: {base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;

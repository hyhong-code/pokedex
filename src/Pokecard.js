import React, { Component } from "react";
import "./Pokecard.css";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
  render() {
    const {
      data: { id, name, type, base_experience },
    } = this.props;

    // transform id to fit api url
    const transformedId = id < 100 ? `00${id}`.slice(-3) : id;
    // build api url
    const imgSrc = `${POKE_API}${transformedId}.png`;

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-header">{name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} />
        </div>
        <div className="Pokdcard-data">Type: {type}</div>
        <div className="Pokdcard-data">EXP: {base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;

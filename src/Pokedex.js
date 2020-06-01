import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winnng Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }

    return (
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {this.props.totalExp}</h4>
        <div className="Pokedex-board">
          {this.props.pokemons.map((data) => (
            <Pokecard data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;

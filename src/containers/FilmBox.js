import React, { Component } from 'react';
import FilmList from '../components/FilmList'


class FilmBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: [
        {director: 'Steven Spielberg', film: 'Jaws: A fishy tale about a giant rubber shark. Dont Go In The Water', id:111},
        {director: 'George Lucas', film: 'StarWars: Space people shoot each other with lasers and fight bad guys. Pew pew', id:222},
        {director: 'Tom Cruise', film: 'Mission Impossibe: A terrible action vehicle to let multi-millionaire Cruise shjow off his adrenelin addiction', id:333},
        {director: 'Quentin Tarantino', film: 'Hateful 8: A rehash of every cowboy film ever made with carboard thin charater portrayls and a distinct lack of scenery. Maybe the budget was small?', id:444}
      ]
    }
  }
  render() {
    return (
      <div className="film-box">
        UK Opening This Weekend
        <FilmList films={this.state.films} />
      </div>
    )
  };
}

export default FilmBox;

import React, { Component } from 'react';
import FilmList from '../components/FilmList'


class FilmBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: [
        {director: 'Steven Spielberg', title: 'Jaws', info: 'A fishy tale about a giant rubber shark. Dont Go In The Water', link: 'https://www.odeon.co.uk/cinema-tickets/', id:111},
        {director: 'George Lucas', title: 'StarWars', info: 'Space people shoot each other with lasers and fight bad guys. Pew pew', link: 'https://www.odeon.co.uk/cinema-tickets/', id:222},
        {director: 'Tom Cruise', title: 'Mission Impossibe', info: 'A terrible action vehicle to let multi-millionaire Cruise show off his adrenelin addiction', link: 'https://www.odeon.co.uk/cinema-tickets/', id:333},
        {director: 'Quentin Tarantino', title: 'Hateful 8', info: 'A rehash of every cowboy film ever made with carboard thin charater portrayals and a distinct lack of scenery. Maybe the budget was small?',link: 'https://www.odeon.co.uk/cinema-tickets/', id:444}
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

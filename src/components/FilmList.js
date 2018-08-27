import React, { Component } from 'react';
import Film from './Film.js';


class FilmList extends Component {
  render() {
    console.log('this.props.films', this.props.films)
    const filmComponents = this.props.films.map((film) => {
      return (<Film
      director={film.director}
      key={film.id}
      film={film.film}
      >
      {film.film}
    </Film>);
    });
    return (
      <ul className="film-list">
        [Now Showing]
        {filmComponents}
      </ul>
    );
  }
}

export default FilmList;

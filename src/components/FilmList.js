import React, { Component } from 'react';
import Film from './Film.js';


class FilmList extends Component {
  render() {
    console.log('this.props.films', this.props.films)
    const filmComponents = this.props.films.map((film) => {
      return (<Film
      img={film.img}
      title={film.title}
      director={film.director}
      info={film.info}
      link={film.link}
      key={film.id}
      >
      {film.img} {film.title} - {film.director}: {film.info}. {film.link};
    </Film>);
    });
    return (
      <ul className="film-list">
        Now Showing
        {filmComponents}
      </ul>
    );
  }
}

export default FilmList;

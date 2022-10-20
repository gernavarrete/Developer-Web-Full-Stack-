import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from '../../actions/index.js';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
        {this.props.moviesFav && this.props.moviesFav.map(movie => (
          <div key={movie.id}>
          <Link to={`/movie/${movie.imdbID}`}>{movie.title}</Link>
          <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
          </div>
          )
        )}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    moviesFav: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

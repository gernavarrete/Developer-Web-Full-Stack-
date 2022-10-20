import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    
    componentDidMount(){
        const movieID = this.props.match.params.id;
        this.props.getMovieDetail(movieID);
    }



    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula
                <h2>{this.props.movie.Title} ({this.props.movie.Year})</h2>
                <img src={this.props.movie.Poster} alt={this.props.movie.Title}/>
                <h4>{this.props.movie.Plot}</h4>
                <h4>{this.props.movie.Language}</h4>
                <h4>{this.props.movie.Genre}</h4>
                <h4>{this.props.movie.Awards}</h4>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id))
    };
  }


export default connect(mapStateToProps,mapDispatchToProps)(Movie);
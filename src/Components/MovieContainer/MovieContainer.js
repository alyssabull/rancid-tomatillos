import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MovieContainer.css';

const MovieContainer = ({ movies, displayMovieDetails }) => {

  const posters = movies.map(movie => {
    return (
        <MoviePoster
          id={movie.id}
          image={movie.poster_path}
          title={movie.title}
          rating={movie.average_rating}
          displayMovieDetails={displayMovieDetails}
          key={movie.id}
        />
    );
  })

  return (
       <section className ="movies-container">
      { posters }
      </section>
  )
}

export default MovieContainer;

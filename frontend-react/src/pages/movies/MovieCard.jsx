import React from "react";
import "./movies.css";

const MovieCard = ({ movie, selectMovie }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie-card" onClick={() => selectMovie(movie)}>
      {movie.poster_path ? (
        <img
          className="movie-cover"
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt=""
        />
      ) : (
        <div className="movie-placeholder"> Image Not Found</div>
      )}
      <h5 className="movie-title">{movie.title}</h5>
    </div>
  );
};

export default MovieCard;

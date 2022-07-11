import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./movies.css";
import YouTube from "react-youtube";

const Movies = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        query: searchKey,
      },
    });

  
    await selectMovie(results[0]);
    setMovies(results);
  };

  const fetchMovie = async (id) => {
    const{data} = await axios.get(`${API_URL}/movie/${id}`,{
        params:{
            api_key: process.env.REACT_APP_MOVIE_API_KEY,
            append_to_response: 'videos',
        }
    })
    return data;
}

const selectMovie = async (movie) => {
    setPlayTrailer(false);
    const data = await fetchMovie(movie.id);
    setSelectedMovie(data)

}


  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () =>
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };


  const renderTrailer = () => {
    const trailer = selectedMovie.videos.results.find(vid => vid.name === 'Official Trailer')
    const key = trailer ? trailer.key : selectedMovie.videos.results[0].key
    console.log('trailer:',trailer)
    return(
        <YouTube 
            videoId={key} 
            className={'youtubes'}
            opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                    autoplay:1,
                    controls: 0, 
                }
            }} 
        />
    )
  }
  return (
    <>
      <header className="header">
        <div className="header-content max-center">
          <h1> Movie Fanatics </h1>

          <form onSubmit={searchMovies}>
            <input typr="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type="submit"> Search...</button>
          </form>
        </div>
      </header>

      <div className="hero" style={{backgroundImage: `url('${IMAGE_URL}${selectedMovie.backdrop_path}')`}}>
        <div className="hero-content max-center" >
            
            {playTrailer ? <button onClick={() => setPlayTrailer(false)} className="play-btn close">X</button>:null }
            { selectedMovie.videos && playTrailer ?  renderTrailer() : null }
            <button onClick={() => setPlayTrailer(true)} className="play-btn">Play Trailer</button>
            <h1 className="hero-title">{selectedMovie.title}</h1>
            {selectedMovie.overview ? <p className="hero-overview"> {selectedMovie.overview} </p> : null }
        </div>
      </div>

      <div className="container max-center">{renderMovies()}</div>
    </>
  );
};

export default Movies;

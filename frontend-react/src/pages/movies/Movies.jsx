import React, { useRef } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./movies.css";
import YouTube from "react-youtube";
import YoutubeDownloader from "../../components/youtubeDownloader/YoutubeDownloader";
import { useNavigate } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Movies = () => {
  const [click, setClick] = useState(false);
  const { auth } = useAuth();

  const handleClick = () => setClick(!click);

  const API_URL = "https://api.themoviedb.org/3";
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const profileName = localStorage.getItem("name");
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});
  const [reviews, setReviews] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [search, setSearch] = useState(true);
  const scrollRef = useRef();
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [trailerkey, setTrailerKey] = useState("");
  const AuthToken = localStorage.getItem("AuthToken");
  const [searchBar, setSearchBar] = useState(false);

  const navigate = useNavigate();

  //FETCH MOVIES
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

  //FETCH MOVIE
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        append_to_response: "videos",
      },
    });
    const trailer = data.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    const key = trailer ? trailer.key : selectedMovie.videos.results[0].key;
    setTrailerKey(key);
    setMovieId(data.id);

    return data;
  };
  const getReviews = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${movieId}/reviews`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    });
    setReviews(data.results);
  };

  //SELECT MOVIE
  const selectMovie = async (movie) => {
    setPlayTrailer(false);
    const data = await fetchMovie(movie.id);
    setSelectedMovie(data);
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  //RENDER MOVIES
  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
    ));

  //SEARCH MOVIES
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  //RENDER TRAILERS
  const renderTrailer = () => {
    const trailer = selectedMovie.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    const key = trailer ? trailer.key : selectedMovie.videos.results[0].key;

    return (
      <YouTube
        videoId={key}
        className={"youtubes"}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 0,
          },
        }}
      />
    );
  };

  useEffect(() => {
    setImg(IMAGE_URL + selectedMovie?.poster_path);
    setName(selectedMovie?.title);
    setDescription(selectedMovie?.tagline);
  }, [selectedMovie]);

  //ADD MOVIES TO FAVORITES
  const addToFav = async () => {
    try {
      const response = await axios.post(
        "/api/v1/auth/user/fav",
        { favMovie: name, favMovieUrl: img },
        {
          headers: { Authorization: "Bearer " + AuthToken },
        }
      );

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const openMovie = () => {
    navigate("/video");
  };

  return (
    <>
      <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink to="/" className="nav-logo">
              <img
                className="logo"
                src={require("../../img/logo.png")}
                alt="logo"
              />
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="new-nav-item">
                {searchBar ? null : (
                  <i
                    class="fa fa-search"
                    aria-hidden="true"
                    onClick={() => setSearchBar(true)}
                  ></i>
                )}
                {searchBar ? (
                  <form onSubmit={searchMovies}>
                    <input
                      type="text"
                      onChange={(e) => setSearchKey(e.target.value)}
                      className="movie-search"
                      placeholder="search for movies"
                    />
                    <button type="submit" className="movie-search-btn">
                      {" "}
                      Search...
                    </button>
                  </form>
                ) : null}
              </li>
              {auth.user ? (
                <li className="new-nav-item">
                  <NavLink
                    to="/auth/messenger"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Messenger
                  </NavLink>
                </li>
              ) : null}
              {auth.user ? (
                <li className="new-nav-item">
                  <NavLink
                    to="/auth/swipe"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Connect
                  </NavLink>
                </li>
              ) : null}
              {auth.user ? (
                <li className="new-nav-item">
                  <NavLink
                    to="/auth/premium"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Premuim
                  </NavLink>
                </li>
              ) : null}

              <li className="new-nav-item">
                <NavLink
                  to="/movies"
                  activeclassname="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Movies
                </NavLink>
              </li>

              {auth.user ? null : (
                <li className="new-nav-item">
                  <NavLink
                    to="/register"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Sign up
                  </NavLink>
                </li>
              )}
              {auth.user ? null : (
                <li className="new-nav-item">
                  <NavLink
                    to="/login"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Sign in
                  </NavLink>
                </li>
              )}
              {auth.user ? (
                <li className="new-nav-item">
                  <NavLink
                    to="/auth/profile"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    {profileName}
                  </NavLink>
                </li>
              ) : null}
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
      <div
        className="hero"
        ref={scrollRef}
        style={{
          backgroundImage: `url('${IMAGE_URL}${selectedMovie.backdrop_path}')`,
        }}
      >
        <div className="hero-content max-center">
          {playTrailer ? (
            <button
              onClick={() => {
                setPlayTrailer(false);
                setSearch(true);
              }}
              className="play-btn close"
            >
              Close Video
            </button>
          ) : null}

          {selectedMovie.videos && playTrailer ? renderTrailer() : null}

          <h1 className="hero-title">{selectedMovie.title}</h1>
          {selectedMovie.overview ? (
            <p className="hero-overview"> {selectedMovie.overview} </p>
          ) : null}
          <div className="movie-btns">
            <button
              onClick={() => {
                setPlayTrailer(true);
                setSearch(false);
              }}
              className="play-btn"
            >
              Play Trailer
            </button>
            <button onClick={addToFav} className="play-btn">
              Add To Favorites
            </button>
            <YoutubeDownloader videoId={trailerkey} />
            <button className="play-btn watch-movie" onClick={openMovie}>
              Watch Movie
            </button>
          </div>
        </div>
      </div>

      <div className="container max-center">{renderMovies()}</div>
    </>
  );
};

export default Movies;

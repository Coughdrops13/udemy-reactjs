import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  //to make http request succesful, change film to films in url
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    fetch("https://swapi.dev/api/films/")
      .catch((err) => {
      console.log("ERROR", err.message);
      setError(err.message);
      setIsLoading(false);
    })
    .then((res) => {
        return res.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
        setIsLoading(false);
      }).catch((err) => {
        console.log("ERROR", err.message);
        setError(err.message);
        setIsLoading(false);
      });
  };

  let content = <p>No movies found.</p>

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (!isLoading && movies.length > 0) {
    content = <MoviesList movies={movies}/>;
  } else if (!isLoading && error) {
    content = <p>error</p>;
  } 

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;

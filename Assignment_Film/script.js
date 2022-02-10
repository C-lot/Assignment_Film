const listOfMoviesUL = document.getElementById("list-of-movies");
const filterButtons = document.getElementsByName("movie-filter");
const latestMovies = movies.filter((movie) => movie.year >= 2014);

const addMoviesToDom = (movies) => {
  movies.map((movie) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const a = document.createElement("a");
    a.href = "https://www.imdb.com/title/" + movie.imdbID + "/";
    img.src = movie.poster;
    listOfMoviesUL.appendChild(li);
    li.appendChild(a);
    a.appendChild(img);
  });
};

addMoviesToDom(movies);

const deleteMoviesfromDOM = () => (listOfMoviesUL.innerHTML = " ");

const filterMovies = (wordinMovie) => {
  let filteredMovies = movies.filter((movie) =>
    movie.title.includes(wordinMovie)
  );
  addMoviesToDom(filteredMovies);
};

filterButtons.forEach((button) =>
  button.addEventListener("change", (event) => {
    switch (event.target.value) {
      case "latest":
        deleteMoviesfromDOM();
        addMoviesToDom(latestMovies);
        break;
      case "avengers":
        deleteMoviesfromDOM();
        filterMovies("Avengers");
        break;
      case "princess":
        deleteMoviesfromDOM();
        filterMovies("Princess");
        break;
      case "x-men":
        deleteMoviesfromDOM();
        filterMovies("X-Men");
        break;
      case "batman":
        deleteMoviesfromDOM();
        filterMovies("Batman");
        break;
    }
  })
);

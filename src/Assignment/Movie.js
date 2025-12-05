import { useState } from "react";
function Movie() {
  const movies = [
    { title: "Avatar", year: 2009, rating: "7.8" },
    { title: "Inception", year: 2010, rating: "8.8" },
    { title: "Interstellar", year: 2014, rating: "8.6" },
    { title: "KGF", year: 2018, rating: "8.2" },
  ];
  const [search, setSearch] = useState("");
  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div style={{ padding: 20 }}>
      <h2>🎬 Movie Search App</h2>
      <input
        placeholder="Search Movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
      <ul>
        {filteredMovies.map((m, i) => (
          <li key={i}>
            <b>{m.title}</b> <br />
            Year: {m.year} <br />
            Rating: {m.rating}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Movie;

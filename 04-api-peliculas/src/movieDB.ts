import axios from "axios";
//npm install axios
const movieDb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "es-ES",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmZkZWIyNGVkZDI1NGVkMWY4ZDhhNTk5N2Y2ODNlYSIsIm5iZiI6MTY2OTUxODQ4My4zMzUsInN1YiI6IjYzODJkNDkzMWIxNTdkMDA4NWViNTU2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c9LZ80tL1mBpC3rF6HNIOgnp6nOXfljX4alnh1CRsnU",
  },
});

export default movieDb;

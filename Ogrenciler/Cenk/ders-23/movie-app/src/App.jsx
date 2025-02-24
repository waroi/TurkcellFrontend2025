import MovieService from "./services/fetch";
function App() {
  MovieService.fetchData("GET").then((res) => console.log(res));
  return <></>;
}

export default App;

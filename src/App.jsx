import "./App.css";
import Header from "./components/Header";
import Destination from "./components/Destination";
import data from "./data";

function App() {
  const destinations = data.map((destination) => {
    return <Destination key={destination.id} {...destination} />;
  });
  console.log(destinations);
  return (
    <div className="app--container">
      <Header />
      <div className="destinations--container">{destinations}</div>
    </div>
  );
}

export default App;

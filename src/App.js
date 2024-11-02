import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <h1>Introvert</h1>
      <Header text="Header Props" />
      <Home text="Home Props" />
      <Footer text="Footer Props" />
    </div>
  );
};

export default App;

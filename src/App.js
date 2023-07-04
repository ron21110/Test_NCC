import logoncc from "./components/logoncc.png";
import "./App.css";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="container row">
      <Menu />
      <div className="App  ">
        <img className="logo" src={logoncc} alt="Logo" />
        <Content1 />
        <Content2 />
        <Footer />
      </div>
    </div>
  );
}

export default App;

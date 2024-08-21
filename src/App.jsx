// style
import "./App.css";
import Actions from "./components/Actions";
import Nav from "./components/Nav";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="wrapper">
      <header>
        <Tabs />
        <Nav />
      </header>
      <section>
        <Actions />
      </section>
    </div>
  );
}

export default App;
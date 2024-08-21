// style
import "./App.css";

import Actions from "./components/Actions";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
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
      <Sidebar />
      <main>
        <h1>Folders</h1>
      </main>
      <footer>
        <p>28 items</p>
      </footer>
    </div>
  );
}

export default App;

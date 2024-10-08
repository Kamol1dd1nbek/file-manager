// style
import "./App.css";

import Actions from "./components/Actions";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import Workspace from "./components/Workspace";

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
      <div className="context">
        <Sidebar />
        <Workspace />
      </div>
      <footer>
        <p>28 items</p>
      </footer>
    </div>
  );
}

export default App;

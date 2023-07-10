import "./App.css";
import Sidenav from "./Sidenav/Sidenav";
import Topnav from "./Topnav/Topnav.js";
import Cards from "./Cards/Cards";
import Graphs from "./Graph/Graph";
import Piechart from "./Piechart/Piechart";
import Content from "./Content/Content";

function App() {
  return (
    <div className="container">
      <div className="sidenav">
        <Sidenav />
      </div>
      <div className="main">
        <div className="topnav">
          <Topnav />
        </div>
        <div className="cards">
          <Cards />
        </div>

        
        <div className="graphs">
          <Graphs />
        </div>


        <div className="combo">
          <div className="piechart block">
            <Piechart />
          </div>
          <div className="content block">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

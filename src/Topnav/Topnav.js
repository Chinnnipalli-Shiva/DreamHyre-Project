import "./Topnav.css"
import bell from "../images/bellicon.png";
import mb from "../images/mb.jpg"
import search from "../images/searchicon.png"

function Topnav() {
    return (
      <div className="Topmenu">
          <h3>Dashboard</h3>
          <input type="text" placeholder="Search..." /><img className="search" src={search} alt="."/>
          <p className="bell">
            <img src={bell} alt="-" />
          </p>
          <p className="mb">
            <img src={mb} alt="-" />
          </p>
        </div>
    );
  }
  
  export default Topnav;
  
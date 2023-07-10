import "./Sidenav.css";
import setting2 from '../images/seting2.png';
import piechart from '../images/dashboard.png';
import price from '../images/price.png';
import schedule from '../images/calender.png';
import user2 from '../images/user.png';

function Sidenav() {
  return (

    <div className="navbar">
      <h2 className="Board2">Board.</h2>
      <ul className="Menu">
        <li>
          <img src={piechart} alt="" />
          <p style={{fontSize:"20px"}}>Dashboard</p>
        </li>
        <li>
          <img src={price} alt="" />
          <p>Transactions</p>
        </li>
        <li>
          <img src={schedule} alt="" />
          <p>Schedules</p>
        </li>
        <li>
          <img src={user2} alt="" />
          <p>Users</p>
        </li>
        <li>
          <img src={setting2} alt="shiva" />
          <p>Settings</p>
        </li>
      </ul>
      <ul className="Submenu">
        <li>Help</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}


export default Sidenav;

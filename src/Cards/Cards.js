import revenue from "../images/money-withdraw-svgrepo-com (1).png";
import transcations from "../images/blackpricetag.png";
import likes from "../images/blacklike.png";
import user from "../images/blackuser.png";

import "./Cards.css"
function Cards() {
  return (
    <div className="items">
      <div className="revenue box1">
        <img src={revenue} alt="," />
        <p>Total Revenues</p>
        <h2>$2,129,430</h2>
      </div>
      <div className="transcations box1">
        <img src={transcations} alt="," />
        <p>Total Transactions</p>
        <h2>1,520</h2>
      </div>
      <div className="likes box1">
        <img src={likes} alt="," />
        <p>Total Likes</p>
        <h2>9,721</h2>
      </div>
      <div className="Users box1">
        <img src={user} alt="," />
        <p>Total Users</p>
        <h2>892</h2>
      </div>
    </div>
  );
}

export default Cards;

import "./Content.css"
import arrow from "../images/rightarrow.png"

function Content() {
    return (
      <div class="card">
       <div class="header">
        <h2>Today's Schedule</h2>
        <div className="see-all">
            <p class="see">See all </p>
            <img src={arrow} alt=","/>
        </div>
       </div>
       <div class="content-part">
        <div class="content-1">
            <div class="line1"></div>
            <div class="content">
                <h5>Meeting with suppliers from Kuta Bali</h5>
                <p>14.00-15.00</p>
                <p>at Sunset Road, Kuta, Bali</p>
            </div>
            </div>
            <div class="content-2">
                <div class="line2"></div>
                <div class="content">
                    <h5>Meeting with suppliers from Kuta Bali</h5>
                    <p>14.00-15.00</p>
                    <p>at Sunset Road, Kuta, Bali</p>
                </div>
           </div>
       </div>
    </div>
    );
  }
  
  export default Content;
  
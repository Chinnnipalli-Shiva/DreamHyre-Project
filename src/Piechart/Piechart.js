import "./Piechart.css";
import Chart from "react-apexcharts";
import down from "../images/down-arrow.png";

function Piechart() {
  return (
    <div className="App">
      <div className="topproducts">
        <h3>Top products</h3>
        <div className="month-year">
          <p>May - June 2021 </p>
          <img className="downarrow" src={down} alt="," />
        </div>
      </div>
      <Chart
        type="pie"
        width={400}
        height={160}
        series={[55, 31, 14]}
        backgroundColor={["red", "green", "yellow"]}
        options={{
          labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
        }}
      ></Chart>
    </div>
  );
}
export default Piechart;

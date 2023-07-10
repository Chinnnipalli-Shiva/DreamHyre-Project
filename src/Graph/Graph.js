import { useState } from "react";
import { Line } from "react-chartjs-2";
import "./Graph.css";

import {
  Chart as ChartsJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale, // x
  LinearScale, // y a
  PointElement,
  Filler,
  ArcElement,
} from "chart.js";

ChartsJS.register(
  Title,
  Tooltip,
  ArcElement,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function Graphs() {
  const arr1 = [120,400,320,521,314,239,201,410,230,256,287,302];
  const arr2 = [320,351,201,130,298,410,369,321,201,257,103,378];

  let [info, updateinfo] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "Guest",
        data: arr1,
        backgroundColor: "#9BDD7C",
        borderColor: "#9BDD7C",
        tension: 0.4,
        pointBorderColor: "#9BDD7C",
        pointBackgroundColor: "#9BDD7C",
      },
      {
        label: "User",
        data: arr2,
        backgroundColor: "#E9A0A0",
        borderColor: "#E9A0A0",
        tension: 0.4,
        pointBorderColor: "#E9A0A0",
        pointBackgroundColor: "#E9A0A0",
      },
    ],
  });
  return (
    <div className="graph">
      <div className="activity">
        <h3>Activity</h3>
        <p>May-June 2021</p>
      </div>
      <div className="line">
        <Line data={info} style={{width:"700px",height:"310px"}} ></Line>
      </div>
    </div>
  );
}
export default Graphs;

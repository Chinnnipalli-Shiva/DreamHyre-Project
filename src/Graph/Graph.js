import { useState } from "react";
import { Line } from "react-chartjs-2";
import "./Graph.css";

import {
  Chart as ChartsJS,
  LineElement,
  Legend,
  CategoryScale, // x
  LinearScale, // y a
  PointElement,
} from "chart.js";

ChartsJS.register(
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

function Graphs() {
  const arr1 = [120, 400, 320, 521, 314, 239, 201, 410, 230, 256, 287, 302];
  const arr = [320, 351, 201, 130, 298, 410, 369, 321, 201, 257, 103, 378];

  let data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      // "Aug",
      // "Sep",
      // "Oct",
      // "Nov",
      // "Dec",
    ],
    datasets: [
      {
        data: arr1,
        backgroundColor: "transparent",
        borderColor: "#9BDD7C",
        tension: 0.4,
        pointBorderColor: "transparent",
      },
      {
        data: arr,
        backgroundColor: "transparent",
        borderColor: "#E9A0A0",
        tension: 0.4,
        pointBorderColor: "transparent",
      },
    ],
  };

  let options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        barPercentage: 0.1,
        categoryPercentage: 0.3,
      },
    },
    y: {
      min: 50,
      max: 550,
      ticks: {
        stepSize: 110,
      },
    },
  };

  return (
    <div className="graph">
      <div className="activity">
        <h3>Activity</h3>
        <p>May-June 2021</p>
      </div>


      <div className="line">
        <Line className="org" data={data} options={options} style={{ width: "900px", height: "250px" }}></Line>
      </div>



      <div className="labelling">
        <div className="graph-label">
          <div className="label-flex">
            <div className="color color-guest"></div>
            <div className="labelName">
              <p>Guest</p>
            </div>
          </div>
        </div>
        <div className="graph-label">
          <div className="label-flex">
            <div className="color color-user"></div>
            <div className="labelName">
              <p>User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Graphs;

//style={{ width: "900px", height: "250px" }}

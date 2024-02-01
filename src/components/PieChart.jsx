import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { toPng } from "html-to-image";
import {calculateGradeDistribution} from "../static/helper";

const PieChart = ({ studentData, pieChartRef }) => {
  

  const data = {
    labels: ["A", "B", "C", "D", "F"],
    datasets: [
      {
        data: calculateGradeDistribution(studentData),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8C44FC",
          "#44FC8C",
        ],
      },
    ],
  };

  useEffect(() => {
    const ctx = pieChartRef?.current?.getContext("2d");

    new Chart(ctx, {
      type: "pie",
      data: data,
    });
  }, []);

  return (
    <>
      <div>
        <canvas ref={pieChartRef} width="400" height="400" />
      </div>
    </>
  );
};

export default PieChart;

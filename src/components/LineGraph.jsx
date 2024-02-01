import React, { useEffect } from "react";
import { useMemo } from "react";
import Chart from "chart.js/auto";
import { calculateJoinersAndLeavers } from "../static/helper";

const LineGraph = ({ studentData, lineGraphRef }) => {
  useMemo(
    () =>
      studentData.sort(
        (a, b) => new Date(a.date_of_birth) - new Date(b.date_of_birth)
      ),
    [studentData]
  );

  const { dates, joinersData, leaversData } = calculateJoinersAndLeavers(studentData);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Joiners",
        borderColor: "#36A2EB",
        data: joinersData,
      },
      {
        label: "Leavers",
        borderColor: "#FFCE56",
        data: leaversData,
      },
    ],
  };

  useEffect(() => {
    const ctx = lineGraphRef?.current?.getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: data,
    });
  }, []);

  return (
    <>
      <div>
        <canvas ref={lineGraphRef} width="400" height="400" />
      </div>
    </>
  );
};

export default LineGraph;

import { Line } from "react-chartjs-2";
import {useMemo} from 'react';

const LineGraph = ({ studentData }) => {

    useMemo(() => studentData.sort((a, b) => new Date(a.date_of_birth) - new Date(b.date_of_birth)), [studentData]);
    console.log("studentData", studentData);

    const getLeaveDate = (joinDate) => {
        const date = new Date(joinDate);
        date.setFullYear(date.getFullYear() + Math.random()*10)
        const year = date.toLocaleString('default', {year: 'numeric'});
        const month = date.toLocaleString('default', {
          month: '2-digit',
        });
        const day = date.toLocaleString('default', {day: '2-digit'});
    
        return `${year}-${month}-${day}`;

    }

    const calculateJoinersAndLeavers = () => {
      const joiners = {};
      const leavers = {};
  
      studentData.forEach((student) => {
        const joinDate = student.date_of_birth;
        const leaveDate = student.leave_date || getLeaveDate(student.date_of_birth);
  
        if (joinDate in joiners) {
          joiners[joinDate]++;
        } else {
          joiners[joinDate] = 1;
        }
  
        if (leaveDate && leaveDate in leavers) {
          leavers[leaveDate]++;
        } else if (leaveDate) {
          leavers[leaveDate] = 1;
        }
      });
  
      const dates = [
        ...new Set([...Object.keys(joiners), ...Object.keys(leavers)]),
      ];
  
      const joinersData = dates.map((date) => joiners[date] || 0);
      const leaversData = dates.map((date) => leavers[date] || 0);
  
      return { dates, joinersData, leaversData };
    };
  
    const { dates, joinersData, leaversData } = calculateJoinersAndLeavers();
  
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
  
    return <Line data={data} />;
  };

  export default LineGraph;
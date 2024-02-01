import React, { useEffect} from "react";
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { toPng } from 'html-to-image';


const PieChart = ({ studentData, pieChartRef }) => {

    const calculateGradeDistribution = () => {
      const gradeCounts = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        F: 0,
      };
  
      studentData.forEach((student) => {
        const grade =
          Object.values(student.grades).reduce((a, b) => a + b, 0) /
          Object.keys(student.grades).length;
  
        if (grade >= 90) {
          gradeCounts.A++;
        } else if (grade >= 80) {
          gradeCounts.B++;
        } else if (grade >= 70) {
          gradeCounts.C++;
        } else if (grade >= 60) {
          gradeCounts.D++;
        } else {
          gradeCounts.F++;
        }
      });

      console.log(gradeCounts)
  
      return Object.values(gradeCounts);
    };
    
  
    const data = {
      labels: ["A", "B", "C", "D", "F"],
      datasets: [
        {
          data: calculateGradeDistribution(),
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
        const ctx = pieChartRef?.current?.getContext('2d');
    
        new Chart(ctx, {
          type: 'pie',
          data: data,
        });
      }, []);

    //   const downloadChartImage = async () => {
    //     const chartImage = await toPng(chartRef.current);
        
    //     // Create an "a" element to trigger the download
    //     const link = document.createElement('a');
    //     link.href = chartImage;
    //     link.download = 'pie_chart.png';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //   };
  
    return <>
     <div>
      <canvas ref={pieChartRef} width="400" height="400" />
      {/* <button onClick={downloadChartImage}>Download Pie Chart</button>       */}
    </div>
     </>
  };

  export default PieChart;
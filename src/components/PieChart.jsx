import { Pie } from "react-chartjs-2";

const PieChart = ({ studentData }) => {
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
  
    return <Pie data={data} />;
  };

  export default PieChart;
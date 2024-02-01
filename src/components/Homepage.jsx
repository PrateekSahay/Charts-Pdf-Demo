import LineGraph from "./LineGraph";
import PieChart from "./PieChart";
import StudentTable from "./StudentTable";
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js'
import StudentTable1 from "./table1";
Chart.register(ArcElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

const HomePage = ({ studentData }) => {
    return (
      <div>
        <h1>Student Information Dashboard</h1>
         <PieChart studentData={studentData} />
         <LineGraph studentData={studentData} /> 
        <StudentTable1 studentData={studentData} />
      </div>
    );
};

export default HomePage;
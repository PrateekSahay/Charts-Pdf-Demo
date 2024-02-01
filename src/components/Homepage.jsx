import LineGraph from "./LineGraph";
import PieChart from "./PieChart";
import StudentTable from "./StudentTable";
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js'
import StudentTable1 from "./table1";
import PDFFile from "./pdff";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';

Chart.register(ArcElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

const generatePdfDocument = async (documentData,fileName) => {
    const blob = await pdf((
        <PDFFile            
        />
    )).toBlob();
    saveAs(blob, fileName);
};

const HomePage = ({ studentData }) => {
    return (
      <div>
        <h1>Student Information Dashboard</h1>
         <PieChart studentData={studentData} />
         <LineGraph studentData={studentData} /> 
        <StudentTable1 studentData={studentData} />
        {/* <PDFFile /> */}
        {/* <PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink> */}
      <button onClick={generatePdfDocument}>asd</button>
      </div>
    );
};

export default HomePage;
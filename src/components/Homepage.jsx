import LineGraph from "./LineGraph";
import PieChart from "./PieChart";
import StudentTable from "./StudentTable";
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js'
import StudentTable1 from "./table1";
import PDFFile from "./pdff";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import { useRef, useEffect, useState } from "react";
import { toPng } from 'html-to-image';
import html2canvas from 'html2canvas';
import Button from '@mui/material/Button';

Chart.register(ArcElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);


const HomePage = ({ studentData }) => {

    const [page, setPage] = useState(0);    
    const pieChartRef = useRef(null);
    const tableRef = useRef(null);
    const lineGraphRef = useRef(null);

    const saveChartAsImage = async (reference) => {
        const pieChartImage = await toPng(reference);
        return pieChartImage;
      };  

      const handleExportToPDF = async () => {        
        let arr = [];
        for (let i = 0; i < Math.ceil(studentData.length / 10); i++) {
          setPage(i);
          const canvas = await html2canvas(tableRef.current);
          const imgData = canvas.toDataURL('image/png');
    
          if (i > 0) {
            arr.push(imgData);
          }
        }    
        return Promise.all(arr);
      };


const generatePdfDocument = async (documentData,fileName) => {
    const pieChartData = await saveChartAsImage(pieChartRef.current);
    const lineGraphData = await saveChartAsImage(lineGraphRef.current);
    const tableData = await handleExportToPDF();

    const blob = await pdf((
        <PDFFile 
        pieChartData={pieChartData}    
        lineGraphData={lineGraphData}
        tableData={tableData}       
        />
    )).toBlob();
    saveAs(blob, fileName);
};

// add loader
    
    return (
      <div>
        <h1>Student Information Dashboard</h1>
         <PieChart studentData={studentData} pieChartRef={pieChartRef}/>
         <LineGraph studentData={studentData} lineGraphRef={lineGraphRef} /> 
        <StudentTable1 studentData={studentData} tableRef={tableRef} page={page} setPage={setPage} />            
      <Button variant="contained" color="primary" onClick={generatePdfDocument}>
        Generate PDF
      </Button>
      </div>
    );
};

export default HomePage;
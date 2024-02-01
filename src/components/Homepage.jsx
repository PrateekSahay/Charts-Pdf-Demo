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

Chart.register(ArcElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);


const HomePage = ({ studentData }) => {

    const [data, setData] = useState(null);
    const [page, setPage] = useState(0);

    console.log({page});
    

    const chartRef = useRef(null);
    const tableRef = useRef(null);

    const saveChartAsImage = async () => {
        const chartImage = await toPng(chartRef.current);
        console.log({chartImage});
        setData(chartImage);
        return chartImage;
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
    const m = await saveChartAsImage()
    // console.log({m} )
    // setData(m);
    const d = await handleExportToPDF();

    const blob = await pdf((
        <PDFFile 
        data={m}    
        tableData={d}       
        />
    )).toBlob();
    saveAs(blob, fileName);
};

// add loader
    
    return (
      <div>
        {/* {data && <img src={data} />} */}
        {/* <button onClick={saveChartAsImage}>dadasd</button> */}
        <h1>Student Information Dashboard</h1>
         <PieChart studentData={studentData} chartRef={chartRef}/>
         <LineGraph studentData={studentData} /> 
        <StudentTable1 studentData={studentData} tableRef={tableRef} page={page} setPage={setPage} />        
        {/* <PDFFile /> */}
        {/* <PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink> */}
      <button onClick={generatePdfDocument}>asd</button>
      {/* <div style={{display: 'none'}}>

      </div> */}
      </div>
    );
};

export default HomePage;
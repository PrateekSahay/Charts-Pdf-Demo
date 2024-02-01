import LineGraph from "./LineGraph";
import PieChart from "./PieChart";
import StudentTable from "./StudentTable";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import { useRef, useEffect, useState } from "react";
import { toPng } from "html-to-image";
import html2canvas from "html2canvas";
import Button from "@mui/material/Button";
import { saveChartAsImage } from "../static/helper";
import PdfFile from "./PdfFile";

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

  const handleExportToPDF = async () => {
    let arr = [];
    for (let i = 0; i < Math.ceil(studentData.length / 10); i++) {
      setPage(i);
      const canvas = await html2canvas(tableRef.current);
      const imgData = canvas.toDataURL("image/png");

      if (i > 0) {
        arr.push(imgData);
      }
    }
    return Promise.all(arr);
  };

  const generatePdfDocument = async (documentData, fileName) => {
    const pieChartData = await saveChartAsImage(pieChartRef.current);
    const lineGraphData = await saveChartAsImage(lineGraphRef.current);
    const tableData = await handleExportToPDF();

    const blob = await pdf(
      <PdfFile
        pieChartData={pieChartData}
        lineGraphData={lineGraphData}
        tableData={tableData}
      />
    ).toBlob();
    saveAs(blob, fileName);
  };

  // add loader

  return (
    <div className="homepage-container">
        <div className="homepage-header">
            <h1>Student Information Dashboard</h1>
            <Button variant="contained" color="primary" onClick={generatePdfDocument}>
              Generate PDF
            </Button>
      </div>
      <PieChart className="children"  studentData={studentData} pieChartRef={pieChartRef} />
      <LineGraph className="children" studentData={studentData} lineGraphRef={lineGraphRef} />
      <StudentTable
        studentData={studentData}
        tableRef={tableRef}
        page={page}
        setPage={setPage}
      />      
    </div>
  );
};

export default HomePage;

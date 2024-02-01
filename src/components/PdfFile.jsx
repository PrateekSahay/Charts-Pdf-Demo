import React, { useEffect, useRef } from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Canvas,
} from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";
import PieChart from "./PieChart";
import studentData from "../static/data";
import { renderToStaticMarkup } from "react-dom/server";
import { toPng } from "html-to-image";

Font.register({
  family: "Roboto",
  src: "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxMKTU1Kvnz.woff",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    // fontFamily: "AntonFamily",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    // fontFamily: "AntonFamily",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    // fontFamily: "AntonFamily",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    // fontFamily: "AntonFamily",
  },
});

const PdfFile = ({ pieChartData, lineGraphData, tableData }) => {
  const pageColors = ["#f6d186", "#f67280", "#c06c84"];

  const pages = [
    {
      text: "Second page content goes here...",
      image:
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcwMzExMzEwNTc0MTAxODM5/lebron-dunk.jpg",
    },
    {
      text: "Third page content goes here...",
      image:
        "https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300",
    },
  ];

  return (
    <>
      <Document>
        <Page>
            <Text>header</Text>
          <View>{pieChartData && <Image src={pieChartData} />}</View>
        </Page>
        <Page>
          <View>{lineGraphData && <Image src={lineGraphData} />}</View>
        </Page>
        {tableData &&
          tableData.map((data, index) => {
            return (
              <Page key={index}>
                <Image key={index} src={data} />
              </Page>
            );
          })}
        {pages.map((page, index) => {
          return (
            <Page
              key={index}
              style={{ ...styles.body, backgroundColor: pageColors[index] }}
            >
              <Text style={styles.header} fixed></Text>
              <Image style={styles.image} src={page.image} />
              <Text style={styles.text}>{page.text}</Text>
              <Text
                style={styles.pageNumber}
                render={({ pageNumber, totalPages }) =>
                  `${pageNumber} / ${totalPages}`
                }
              />
            </Page>
          );
        })}
      </Document>
    </>
  );
};

export default PdfFile;

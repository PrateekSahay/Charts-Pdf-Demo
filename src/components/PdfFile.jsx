import React, { useEffect, useRef } from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Canvas,
  Note,
} from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";
import PieChart from "./PieChart";
import studentData from "../static/data";
import { renderToStaticMarkup } from "react-dom/server";
import { toPng } from "html-to-image";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: "beige",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  frontPage: {
    textAlign: "center",
    color: "grey",
    marginTop: 100,
    fontSize: 50,
  },
});

const PdfFile = ({ pieChartData, lineGraphData, tableData, notes }) => {
  return (
    <>
      <Document>
        <Page>
          <View>
            <Text style={styles.frontPage}>Student</Text>
            <Text style={styles.frontPage}>Information</Text>
            <Text style={styles.frontPage}>Dashboard</Text>
          </View>
        </Page>
        {pieChartData && (
          <Page>
            <View>
              <Text style={styles.header}>Pie Chart</Text>
              <Image src={pieChartData} />
            </View>
          </Page>
        )}
        {lineGraphData && (
          <Page>
            <View>
              <Text style={styles.header}>Line Graph</Text>
              <Image src={lineGraphData} />
            </View>
          </Page>
        )}
        {tableData &&
          tableData.map((data, index) => {
            return (
              <Page key={index}>
                <View style={styles.body}>
                  <Text style={styles.header}>Table Data</Text>
                  <Image key={index} src={data} />
                </View>
              </Page>
            );
          })}
        {notes && (
          <Page>
            <View>
              <Text style={styles.header}>Notes</Text>
              <Text>{notes}</Text>
            </View>
          </Page>
        )}
      </Document>
    </>
  );
};

export default PdfFile;

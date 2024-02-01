import React, { useState, useRef } from 'react';
import _ from 'lodash';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '@mui/material/Button';

const StudentTable = ({ studentData, tableRef, page, setPage }) => {
//   const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');
//   const tableRef = useRef(null);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const sortWithNestedProperty = (property) => {
    return (a, b) => {
      const aValue = _.get(a, property);
      const bValue = _.get(b, property);

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return order === 'asc' ? aValue - bValue : bValue - aValue;
      }

      const aString = String(aValue).toLowerCase();
      const bString = String(bValue).toLowerCase();

      return order === 'asc' ? aString.localeCompare(bString) : bString.localeCompare(aString);
    };
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

//   const handleExportToPDF = async () => {
//     const pdf = new jsPDF();

//     // Loop through the table's pages and create a new page for each
//     for (let i = 0; i < Math.ceil(studentData.length / rowsPerPage); i++) {
//       setPage(i);
//       const canvas = await html2canvas(tableRef.current);
//       const imgData = canvas.toDataURL('image/png');

//       if (i > 0) {
//         pdf.addPage();
//       }

//       pdf.addImage(imgData, 'PNG', 0, 0);
//     }

//     pdf.save('student_table.pdf');
//   };

  return (
    <>
    <TableContainer component={Paper}  ref={tableRef}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => handleRequestSort('name')} style={{ cursor: 'pointer' }}>
              Name
            </TableCell>
            <TableCell onClick={() => handleRequestSort('age')} style={{ cursor: 'pointer' }}>
              Age
            </TableCell>
            <TableCell onClick={() => handleRequestSort('date_of_birth')} style={{ cursor: 'pointer' }}>
              Date of Birth
            </TableCell>
            <TableCell onClick={() => handleRequestSort('city')} style={{ cursor: 'pointer' }}>
              City
            </TableCell>
            <TableCell onClick={() => handleRequestSort('grades.Math')} style={{ cursor: 'pointer' }}>
              Math
            </TableCell>
            <TableCell onClick={() => handleRequestSort('grades.Science')} style={{ cursor: 'pointer' }}>
              Science
            </TableCell>
            <TableCell onClick={() => handleRequestSort('grades.English')} style={{ cursor: 'pointer' }}>
              English
            </TableCell>
            <TableCell onClick={() => handleRequestSort('grades.History')} style={{ cursor: 'pointer' }}>
              History
            </TableCell>
            <TableCell onClick={() => handleRequestSort('grades.Programming')} style={{ cursor: 'pointer' }}>
              Programming
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(studentData, sortWithNestedProperty(orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((student) => (
              <TableRow key={student.name}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.date_of_birth}</TableCell>
                <TableCell>{student.city}</TableCell>
                <TableCell>{student.grades.Math}</TableCell>
                <TableCell>{student.grades.Science}</TableCell>
                <TableCell>{student.grades.English}</TableCell>
                <TableCell>{student.grades.History}</TableCell>
                <TableCell>{student.grades.Programming}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 75, 100]}
        component="div"
        count={studentData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
    {/* <Button variant="contained" color="primary" onClick={handleExportToPDF}>
        Export to PDF
      </Button> */}
    </>
  );
};

export default StudentTable;
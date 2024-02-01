import { useTable } from "react-table";

const StudentTable = ({ studentData }) => {
    const formatStudentDataForTable = () => {
      return studentData.map((student) => ({
        name: student.name,
        id: student.age,
        grade:
          Object.values(student.grades).reduce((a, b) => a + b, 0) /
          Object.keys(student.grades).length,
        joinDate: student.date_of_birth,
        leaveDate: student.leave_date || "N/A",
      }));
    };
  
    const columns = [
      { Header: "Name", accessor: "name" },
      { Header: "ID", accessor: "id" },
      { Header: "Grade", accessor: "grade" },
      { Header: "Join Date", accessor: "joinDate" },
      { Header: "Leave Date", accessor: "leaveDate" },
    ];
  
    const data = formatStudentDataForTable();
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });
  
    return (
      <table {...getTableProps()} style={{ marginTop: "20px" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  export default StudentTable;
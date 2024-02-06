// FILEPATH: /Users/prateekkumarsahay/Documents/Personal Code/Temp folder/Charts-Pdf-Demo/src/components/__tests__/StudentTable.test.jsx

import { render, fireEvent, within } from '@testing-library/react';
import StudentTable from '../StudentTable';

const mockSetPage = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

const studentData = [
  { name: 'John', age: 20, date_of_birth: '2001-01-01', city: 'New York', grades: { Math: 90, Science: 85, English: 88, History: 92, Programming: 95 } },
  { name: 'Jane', age: 22, date_of_birth: '1999-01-01', city: 'Los Angeles', grades: { Math: 92, Science: 88, English: 90, History: 94, Programming: 96 } },
];

describe('StudentTable', () => {
  test('renders StudentTable component', () => {
    const { getByText } = render(<StudentTable studentData={studentData} setPage={mockSetPage} page={0} />);

    // Check table headers
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Age')).toBeInTheDocument();
    expect(getByText('Date of Birth')).toBeInTheDocument();
    expect(getByText('City')).toBeInTheDocument();
    expect(getByText('Math')).toBeInTheDocument();
    expect(getByText('Science')).toBeInTheDocument();
    expect(getByText('English')).toBeInTheDocument();
    expect(getByText('History')).toBeInTheDocument();
    expect(getByText('Programming')).toBeInTheDocument();
  });

  test('sorts data when table header is clicked', () => {
    const { getByText, getAllByRole } = render(<StudentTable studentData={studentData} setPage={mockSetPage}  page={0} />);

    // Simulate click event on 'Name' header
    fireEvent.click(getByText('Name'));

    // Get all rows in the table
    const rows = getAllByRole('row');
    console.log({rows});

   // Get all cells in the first row
  const cells = within(rows[1]).getAllByRole('cell');

  // Check if the first cell in the first row contains the name 'John'
  expect(cells[0]).toHaveTextContent('John');
  });

  test('navigates to student page when name is clicked', () => {
    const { getByText } = render(<StudentTable studentData={studentData} setPage={mockSetPage} page={0} />);

    // Simulate click event on a student name
    fireEvent.click(getByText('John'));

    // Check if navigate has been called with the correct parameters
    expect(mockNavigate).toHaveBeenCalledWith('/student/John', { state: studentData[0] });
  });
});
import { render, screen, waitFor } from '@testing-library/react';
import LineGraph from '../LineGraph';
import React, { useRef } from 'react';

jest.mock('react-chartjs-2', () => ({
  Line: () => <canvas />, // return a canvas element
}));

// Mock canvas context
HTMLCanvasElement.prototype.getContext = () => ({ 

  });
  

const studentData = [
  { name: 'John', age: 20, date_of_birth: '2001-01-01', city: 'New York', grades: { Math: 90, Science: 85, English: 88, History: 92, Programming: 95 } },
  { name: 'Jane', age: 22, date_of_birth: '1999-01-01', city: 'Los Angeles', grades: { Math: 92, Science: 88, English: 90, History: 94, Programming: 96 } },
];

describe('LineGraph', () => {
  it('renders without crashing', () => {
    const TestComponent = () => {
      const lineGraphRef = useRef(null);
      return <LineGraph studentData={studentData} lineGraphRef={lineGraphRef} />;
    };
    render(<TestComponent />);
  });

  it('renders a canvas and creates a chart', async () => {
    const TestComponent = () => {
      const lineGraphRef = useRef(null);
      return <LineGraph studentData={studentData} lineGraphRef={lineGraphRef} />;
    };
    const { container } = render(<TestComponent />);
    console.log({container});
    
    const canvas = container.querySelector('canvas');
  expect(canvas).toBeInTheDocument();
  });
});
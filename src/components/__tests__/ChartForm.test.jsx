import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChartForm from '../ChartForm';

describe('ChartForm component', () => {
  const mockUpdateFormData = jest.fn();
  const mockSetIsDialogOpen = jest.fn();

  const formData = {
    isPieChartSelected: false,
    isLineGraphSelected: false,
    isTableSelected: false,
    notes: '',
  };

  it('renders correctly', () => {
    const { getByLabelText } = render(
      <ChartForm
        formData={formData}
        updateFormData={mockUpdateFormData}
        isDialogOpen={true}
        setIsDialogOpen={mockSetIsDialogOpen}
      />
    );

    expect(getByLabelText('Checkbox for Pie Chart')).toBeInTheDocument();
    expect(getByLabelText('Checkbox for Line Graph')).toBeInTheDocument();
    expect(getByLabelText('Checkbox for Table')).toBeInTheDocument();
    expect(getByLabelText('Notes')).toBeInTheDocument();
  });

  it('handles form submission correctly', () => {
    const { getByLabelText, getByText } = render(
      <ChartForm
        formData={formData}
        updateFormData={mockUpdateFormData}
        isDialogOpen={true}
        setIsDialogOpen={mockSetIsDialogOpen}
      />
    );

    fireEvent.click(getByLabelText('Checkbox for Pie Chart'));
    fireEvent.click(getByLabelText('Checkbox for Line Graph'));
    fireEvent.click(getByLabelText('Checkbox for Table'));
    fireEvent.change(getByLabelText('Notes'), { target: { value: 'Test notes' } });

    fireEvent.click(getByText('Submit'));

    expect(mockUpdateFormData).toHaveBeenCalledWith({
      isPieChartSelected: true,
      isLineGraphSelected: true,
      isTableSelected: true,
      notes: 'Test notes',
    });
    expect(mockSetIsDialogOpen).toHaveBeenCalledWith(false);
  });

  it('handles dialog close correctly', () => {
    const { getByText } = render(
      <ChartForm
        formData={formData}
        updateFormData={mockUpdateFormData}
        isDialogOpen={true}
        setIsDialogOpen={mockSetIsDialogOpen}
      />
    );

    fireEvent.click(getByText('Cancel'));

    expect(mockSetIsDialogOpen).toHaveBeenCalledWith(false);
  });
});
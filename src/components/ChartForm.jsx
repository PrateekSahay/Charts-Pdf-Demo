// Import necessary modules from React and Material-UI
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

const ChartForm = ({
    formData,
    updateFormData,
    isDialogOpen,
    setIsDialogOpen,
}) => {
  
  const [isPieChartSelected, setPieChartSelected] = useState(formData.isPieChartSelected);
  const [isLineGraphSelected, setLineGraphSelected] = useState(formData.isLineGraphSelected);
  const [isTableSelected, setTableSelected] = useState(formData.isTableSelected);
  const [notes, setNotes] = useState(formData.notes);
  

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {

    e.preventDefault();
    updateFormData({
        isPieChartSelected,
        isLineGraphSelected,
        isTableSelected,
        notes,
    })

    // Close the dialog after submission
    handleClose();
  };

  return (
    <div>      
      <Dialog open={isDialogOpen} onClose={handleClose}>
        <DialogTitle>PDF Configuration</DialogTitle>
        <DialogContent>
          {/* Checkbox for Pie Chart */}
          <FormControlLabel
            control={
              <Checkbox
                checked={isPieChartSelected}
                onChange={(e) => setPieChartSelected(e.target.checked)}
                inputProps={{
                    'aria-label': 'Checkbox for Pie Chart',
                }}
              />
            }
            label="Pie Chart"
          />

          {/* Checkbox for Line Graph */}
          <FormControlLabel
            control={
              <Checkbox
                checked={isLineGraphSelected}
                onChange={(e) => setLineGraphSelected(e.target.checked)}
                inputProps={{
                    'aria-label': 'Checkbox for Line Graph',
                }}
              />
            }
            label="Line Graph"
          />

          {/* Checkbox for Table */}
          <FormControlLabel
            control={
              <Checkbox
                checked={isTableSelected}
                onChange={(e) => setTableSelected(e.target.checked)}
                inputProps={{
                    'aria-label': 'Checkbox for Table',
                }}
              />
            }
            label="Table"
          />

          {/* Textarea for additional information */}
          <TextField
            label="Additional Information"
            multiline
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            fullWidth
            margin="normal"
            inputProps={{
                'aria-label': 'Notes',
            }}
          />
        </DialogContent>
        <DialogActions>
          {/* Buttons for submission and cancellation */}
          <Button onClick={handleClose} color="primary" aria-label="Close">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" aria-label="Submit">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ChartForm;

import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const ControlledOpenSelectStatus = React.memo(
  ({ status, handleChangeStatus }) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    console.log('status');
    return (
      <div>
        <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
          Status :
        </Button>

        <Select
          sx={{ width: '100%' }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={status}
          label="Priority"
          onChange={handleChangeStatus}
        >
          <MenuItem value={'Not Started'}>Not Started</MenuItem>
          <MenuItem value={'In Progress'}>In Progress</MenuItem>
          <MenuItem value={'Completed'}>Completed</MenuItem>
        </Select>
      </div>
    );
  }
);
export default ControlledOpenSelectStatus;

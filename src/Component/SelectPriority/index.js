import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const ControlledOpenSelect = React.memo(({ pri, handleChangePri }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  console.log('priority');

  return (
    <div>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Priority :
      </Button>

      <Select
        sx={{ width: '100%' }}
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={pri}
        label="Priority"
        onChange={handleChangePri}
      >
        <MenuItem value={'Low'}>Low</MenuItem>
        <MenuItem value={'Medium'}>Medium</MenuItem>
        <MenuItem value={'High'}>High</MenuItem>
      </Select>
    </div>
  );
});
export default ControlledOpenSelect;

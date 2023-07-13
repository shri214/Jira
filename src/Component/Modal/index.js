import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import dayjs from 'dayjs';

import ControlledOpenSelect from '../SelectPriority';
import ControlledOpenSelectStatus from '../Status';
import DatePickerValue from '../DatePicker';

const FormDialog = React.memo(
  ({ open, handleClose, containers, setContainers }) => {
    const [val, setVal] = useState('');
    const [pri, setPri] = useState('Low');
    const [status, setStatus] = useState('Not Started');
    const [value, setValue] = useState(dayjs('2022-04-17'));

    const handelDate = (newValue) => {
      setValue(newValue);
    };

    const change = (e) => {
      setVal(e.target.value);
    };

    const handleChangePri = (event) => {
      setPri(event.target.value);
    };
    const handleChangeStatus = (event) => {
      setStatus(event.target.value);
    };

    //   handel adding and reset all field
    const supporting = () => {
      setVal('');
      setPri('Low');
      setStatus('Not Started');
      setValue(dayjs('2022-04-17'));
      handleClose();
    };

    const handelAdding = () => {
      let d = value.$d.getDate() + '/' + value.$d.getMonth() + '/' + value.$y;
      if (status === 'Not Started') {
        setContainers({
          ...containers,
          containers1: [
            ...containers.containers1,
            { tName: val, priority: pri, status, date: d },
          ],
        });
      } else if (status === 'In Progress') {
        setContainers({
          ...containers,
          containers2: [
            ...containers.containers2,
            { tName: val, priority: pri, status, date: d },
          ],
        });
      } else {
        setContainers({
          ...containers,
          containers3: [
            ...containers.containers3,
            { tName: val, priority: pri, status, date: d },
          ],
        });
      }
      supporting();
    };

    //   console.log(val, pri, status, value);
    //   console.log(value.$d.getDate() + ' ' + value.$d.getMonth() + ' ' + value.$y);
    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={val}
              onChange={(e) => change(e)}
              label="Task Name :"
              type="text"
              fullWidth
              variant="standard"
            />
            <ControlledOpenSelect pri={pri} handleChangePri={handleChangePri} />
            <DatePickerValue value={value} handelDate={handelDate} />
            <ControlledOpenSelectStatus
              status={status}
              handleChangeStatus={handleChangeStatus}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handelAdding}>Add Task</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
);
export default FormDialog;

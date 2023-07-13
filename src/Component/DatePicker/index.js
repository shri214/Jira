// import React, { useState } from 'react';
// import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue({ value, handelDate }) {
  console.log('date');
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ mt: 10 }}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="Due Date"
          value={value}
          onChange={(newValue) => handelDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

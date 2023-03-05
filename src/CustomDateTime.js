import * as React from 'react';

// material-ui
import { InputAdornment, TextField } from '@mui/material';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// assets
import DateRangeIcon from '@mui/icons-material/DateRange';
// ==============================|| CUSTOM DATETIME ||============================== //

const CustomDateTime = (props) => {
    const { label, value, id, handleChange, viewOnly, minDate, required, sx = {} } = props;
    const minDateTimeFormat = new Date(minDate);
    const day = minDateTimeFormat.getDate();
    const month = minDateTimeFormat.getMonth();
    const year = minDateTimeFormat.getFullYear();
    const hours = minDateTimeFormat.getHours();
    const minutes = minDateTimeFormat.getMinutes();
    const updatedMinDateTime = new Date(year, month, day, hours, minutes + 1);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDateTimePicker
                value={value}
                onChange={(newValue) => {
                    handleChange(id, newValue);
                }}
                sx={{
                    '& .MuiTypography-root': { color: '#000 !important' }
                }}
                DialogProps={{
                    sx: {
                        '& .MuiPaper-root .MuiDialogContent-root .MuiCalendarOrClockPicker-root .MuiClockPicker-root .MuiClock-root .MuiButtonBase-root .MuiTypography-root':
                            { color: 'black !important' }
                    }
                }}
                autoFocus
                label={label}
                onError={console.log}
                readOnly={viewOnly || false}
                minDateTime={updatedMinDateTime}
                inputFormat="yyyy/MM/dd hh:mm a"
                mask="____/__/__ __:__ _M"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        fullWidth
                        required={required}
                        sx={{ '& .MuiInputLabel-asterisk': { color: required ? 'red' : '' }, ...sx }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <DateRangeIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                )}
            />
        </LocalizationProvider>
    );
};

export default CustomDateTime;

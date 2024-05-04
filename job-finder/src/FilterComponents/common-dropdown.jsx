import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const CommonDropdownFilter = ({displayKey, values=[], keyName, selectedValue, handleChange}) => {
  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">{displayKey}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name={keyName}
          value={selectedValue}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {values.map((el, idx) => <MenuItem key={idx} value={el.value}>{el.label}</MenuItem>)}
        </Select>
      </FormControl>
  )
}

export default CommonDropdownFilter
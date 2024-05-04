import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const CommonDropdownFilter = ({displayKey, values=[], keyName, handleChange}) => {
  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">{displayKey}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={keyName}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {values.map((el, idx) => <MenuItem value={el.value}>{el.label}</MenuItem>)}
        </Select>
      </FormControl>
  )
}

export default CommonDropdownFilter
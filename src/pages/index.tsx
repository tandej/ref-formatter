import React from 'react';
import {
  Button,
  Box,
  ThemeProvider,
  CssBaseline,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import theme from '../theme';

function BasicSelect() {
  const [formatType, setFormatType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setFormatType(event.target.value as string);
  };

  return (
    <Box sx={{minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="FormatType">Format Type</InputLabel>

        <Select id="FormatType" value={formatType} onChange={handleChange}>
          <MenuItem value={0}>MLA</MenuItem>
          <MenuItem value={1}>bibTeX</MenuItem>
          <MenuItem value={2}>yaml</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

const IndexPage = () => {
  const age: number = 0;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box p={4}>
        <Button variant="contained">It fucking works!!!</Button>
        <p />
        <BasicSelect />
      </Box>
    </ThemeProvider>
  );
};

export default IndexPage;

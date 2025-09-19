import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Box } from '@mui/material';

const ProductFilter = ({ filters, setFilters }) => {
  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const clearFilters = () => {
    setFilters({ category: '', application: '' });
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Detergent">Detergent</MenuItem>
          <MenuItem value="Softener">Softener</MenuItem>
          <MenuItem value="Karbol">Karbol</MenuItem>
          <MenuItem value="Shampoo">Shampoo</MenuItem>
          <MenuItem value="Handsoap">Handsoap</MenuItem>
          <MenuItem value="Dishwash">Dishwash</MenuItem>
          <MenuItem value="Tilewash">Tilewash</MenuItem>
          <MenuItem value="Glass Cleaner">Glass Cleaner</MenuItem>
          <MenuItem value="Rush & Crush Remover">Rush & Crush Remover</MenuItem>
          <MenuItem value="Multi Purpose Cleaner">Multi Purpose Cleaner</MenuItem>
          <MenuItem value="Disinfectan Spray">Disinfectan Spray</MenuItem>
          <MenuItem value="Linen Parfume">Linen Parfume</MenuItem>
          <MenuItem value="Furniture Polish">Furniture Polish</MenuItem>
          <MenuItem value="Shampoo Carpet">Shampoo Carpet</MenuItem>
          <MenuItem value="Hand Sanitizer">Hand Sanitizer</MenuItem>
          <MenuItem value="One Step Marble Polisher">One Step Marble Polisher</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Application</InputLabel>
        <Select
          value={filters.application}
          onChange={(e) => handleFilterChange('application', e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Hotel">Hotel</MenuItem>
          <MenuItem value="Resto">Resto</MenuItem>
          <MenuItem value="Rumah Sakit">Rumah Sakit</MenuItem>
          <MenuItem value="Outsourcing">Outsourcing</MenuItem>
        </Select>
      </FormControl>

      <Button variant="outlined" onClick={clearFilters}>
        Clear Filters
      </Button>
    </Box>
  );
};

export default ProductFilter;
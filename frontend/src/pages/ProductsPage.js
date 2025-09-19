import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import api from '../services/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', application: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get('/products', { params: filters });
        setProducts(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [filters]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Products
      </Typography>
      <ProductFilter filters={filters} setFilters={setFilters} />
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image || 'https://via.placeholder.com/200'}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="primary">
          Rp {product.price?.toLocaleString('id-ID')}
        </Typography>
        <Button 
          size="small" 
          component={Link} 
          to={`/products/${product._id}`}
          sx={{ mt: 1 }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
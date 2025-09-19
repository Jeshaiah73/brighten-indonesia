import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, useTheme, useMediaQuery, Button } from '@mui/material';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      title: 'The Importance of Proper Disinfection in Healthcare',
      excerpt: 'Learn why proper disinfection protocols are crucial for healthcare facilities and how to implement them effectively.',
      date: 'October 15, 2023',
      category: 'Healthcare',
      readTime: '5 min read'
    },
    {
      title: 'Eco-Friendly Cleaning Solutions for Hotels',
      excerpt: 'Discover how hotels can reduce their environmental footprint while maintaining high cleanliness standards.',
      date: 'October 10, 2023',
      category: 'Sustainability',
      readTime: '4 min read'
    },
    {
      title: 'Kitchen Safety: Preventing Cross-Contamination',
      excerpt: 'Essential guidelines for preventing cross-contamination in commercial kitchens.',
      date: 'October 5, 2023',
      category: 'Food Safety',
      readTime: '6 min read'
    },
    {
      title: 'Choosing the Right Cleaning Products for Your Business',
      excerpt: 'A comprehensive guide to selecting the most effective cleaning products for different business needs.',
      date: 'September 28, 2023',
      category: 'Product Guide',
      readTime: '7 min read'
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / 6);

  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Our Blog
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Expert insights and tips on cleaning, hygiene, and industry best practices
        </Typography>
      </Box>

      {/* Blog Posts Grid */}
      <Grid container spacing={isMobile ? 2 : 4}>
        {paginatedPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="body2" 
                      color="primary" 
                      sx={{ 
                        display: 'inline-block', 
                        px: 1, 
                        py: 0.5, 
                        borderRadius: 1, 
                        bgcolor: 'primary.light',
                        mb: 2
                      }}
                    >
                      {post.category}
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      {post.date}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {post.readTime}
                    </Typography>
                  </Box>
                </CardContent>
                <Box sx={{ p: 2, textAlign: 'center' }}>
                  <Button variant="outlined" size="small">
                    Read More
                  </Button>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {[...Array(totalPages)].map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? 'contained' : 'outlined'}
                size="small"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </Box>
        </Box>
      )}

      {/* Newsletter CTA */}
      <Box sx={{ mt: 12, textAlign: 'center', p: 6, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Stay Updated
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Subscribe to our newsletter for the latest industry insights and product updates
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            style={{
              padding: '10px 16px',
              border: '1px solid #ddd',
              borderRadius: 4,
              fontSize: 16
            }}
          />
          <Button variant="contained" size="large">
            Subscribe
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogPage;
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonials = () => {
  const theme = useTheme();

  const testimonials = [
    {
      name: 'John Doe',
      position: 'Hotel Manager',
      company: 'Grand Hotel Jakarta',
      content: 'The quality of Brighten Indonesia products is outstanding. Our guests have noticed the difference in cleanliness.',
      avatar: '👨‍💼'
    },
    {
      name: 'Jane Smith',
      position: 'Operations Director',
      company: 'Restaurant Chain Indonesia',
      content: 'Their kitchen cleaning solutions have helped us maintain the highest hygiene standards.',
      avatar: '👩‍💼'
    },
    {
      name: 'Ahmad Rahman',
      position: 'Facility Manager',
      company: 'Rumah Sakit Umum',
      content: 'The disinfectant products are effective and safe for our healthcare environment.',
      avatar: '👨‍⚕️'
    }
  ];

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Box sx={{ maxWidth: 'xl', mx: 'auto' }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          What Our Clients Say
        </Typography>
        
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          className="testimonial-carousel"
        >
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ fontSize: 48, mr: 3 }}>
                  {testimonial.avatar}
                </Box>
                <Box>
                  <Typography variant="h6">{testimonial.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.position}, {testimonial.company}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
                "{testimonial.content}"
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#FFD700', fontSize: 20 }}>★</span>
                ))}
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Testimonials;
import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box, useTheme, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQPage = () => {
  const theme = useTheme();

  const faqs = [
    {
      question: 'What types of cleaning products do you offer?',
      answer: 'We offer a comprehensive range of household chemicals including detergents, disinfectants, floor cleaners, and specialized solutions for different industries.'
    },
    {
      question: 'Do you provide custom formulations?',
      answer: 'Yes, we can develop custom formulations based on your specific requirements. Contact our R&D team for more information.'
    },
    {
      question: 'What is your minimum order quantity?',
      answer: 'Our minimum order quantity varies by product type. Generally, it starts from 100 liters for bulk orders.'
    },
    {
      question: 'Do you offer delivery services?',
      answer: 'Yes, we provide reliable delivery services across Java and Bali with same-day delivery for orders placed before 10 AM.'
    },
    {
      question: 'Are your products environmentally friendly?',
      answer: 'We offer a range of eco-friendly products that are biodegradable and free from harmful chemicals. Look for our Green Choice label.'
    }
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        Frequently Asked Questions
      </Typography>
      
      <Box sx={{ mt: 4 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ mt: 8, textAlign: 'center', p: 4, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Still have questions?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Our support team is ready to help you
        </Typography>
        <Button variant="contained" size="large">
          Contact Support
        </Button>
      </Box>
    </Container>
  );
};

export default FAQPage;
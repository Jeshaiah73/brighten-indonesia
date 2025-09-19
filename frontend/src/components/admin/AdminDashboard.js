import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button, Tab, Tabs, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [tab, setTab] = useState(0);
  const [stats, setStats] = useState({
    products: 0,
    clients: 0,
    quotes: 0,
    contacts: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, clientsRes, quotesRes, contactsRes] = await Promise.all([
          api.get('/products'),
          api.get('/clients'),
          api.get('/quotes'),
          api.get('/contacts')
        ]);
        
        setStats({
          products: productsRes.data.data.length,
          clients: clientsRes.data.data.length,
          quotes: quotesRes.data.data.length,
          contacts: contactsRes.data.data.length
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      
      <Grid container spacing={isMobile ? 2 : 4} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              height: '100%', 
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Products</Typography>
              <Typography variant="h4" sx={{ my: 1, color: '#1E3A8A' }}>{stats.products}</Typography>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={() => navigate('/admin/products')}
                sx={{ mt: 1 }}
              >
                Manage
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              height: '100%', 
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Clients</Typography>
              <Typography variant="h4" sx={{ my: 1, color: '#1E3A8A' }}>{stats.clients}</Typography>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={() => navigate('/admin/clients')}
                sx={{ mt: 1 }}
              >
                Manage
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              height: '100%', 
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Quotes</Typography>
              <Typography variant="h4" sx={{ my: 1, color: '#1E3A8A' }}>{stats.quotes}</Typography>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={() => navigate('/admin/quotes')}
                sx={{ mt: 1 }}
              >
                Manage
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={{ 
              height: '100%', 
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Contacts</Typography>
              <Typography variant="h4" sx={{ my: 1, color: '#1E3A8A' }}>{stats.contacts}</Typography>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={() => navigate('/admin/contacts')}
                sx={{ mt: 1 }}
              >
                Manage
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleTabChange} variant={isMobile ? 'scrollable' : 'fullWidth'}>
          <Tab label="Products" />
          <Tab label="Clients" />
          <Tab label="Quotes" />
          <Tab label="Contacts" />
        </Tabs>
      </Box>

      <Box sx={{ mt: 2 }}>
        {tab === 0 && <AdminProductsTab navigate={navigate} />}
        {tab === 1 && <AdminClientsTab navigate={navigate} />}
        {tab === 2 && <AdminQuotesTab navigate={navigate} />}
        {tab === 3 && <AdminContactsTab navigate={navigate} />}
      </Box>
    </Container>
  );
};

// Admin Products Tab
const AdminProductsTab = ({ navigate }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get('/products');
        setProducts(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" gutterBottom>Products Management</Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/admin/products/new')}
          sx={{ 
            background: '#1E3A8A',
            '&:hover': { background: '#1E40AF' }
          }}
        >
          Add New Product
        </Button>
      </Box>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <Card 
              sx={{ 
                height: '100%', 
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Rp {product.price?.toLocaleString('id-ID')}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button size="small" variant="outlined">Edit</Button>
                  <Button size="small" variant="outlined" color="error">Delete</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Admin Clients Tab
const AdminClientsTab = ({ navigate }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await api.get('/clients');
        setClients(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" gutterBottom>Clients Management</Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/admin/clients/new')}
          sx={{ 
            background: '#1E3A8A',
            '&:hover': { background: '#1E40AF' }
          }}
        >
          Add New Client
        </Button>
      </Box>
      <Box sx={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Name</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Industry</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Contact</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client._id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px' }}>{client.name}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    background: client.industry === 'Hotel' ? '#3B82F6' : 
                              client.industry === 'Resto' ? '#10B981' : 
                              client.industry === 'Rumah Sakit' ? '#EF4444' : '#8B5CF6',
                    color: 'white',
                    fontSize: '0.875rem'
                  }}>
                    {client.industry}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>{client.contactPerson}</td>
                <td style={{ padding: '12px' }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" variant="outlined">Edit</Button>
                    <Button size="small" variant="outlined" color="error">Delete</Button>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

// Admin Quotes Tab
const AdminQuotesTab = ({ navigate }) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await api.get('/quotes');
        setQuotes(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" gutterBottom>Quotes Management</Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/admin/quotes/new')}
          sx={{ 
            background: '#1E3A8A',
            '&:hover': { background: '#1E40AF' }
          }}
        >
          Create New Quote
        </Button>
      </Box>
      <Box sx={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Client</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Total Price</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Status</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map(quote => (
              <tr key={quote._id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px' }}>{quote.client?.name}</td>
                <td style={{ padding: '12px' }}>Rp {quote.totalPrice?.toLocaleString('id-ID')}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{ 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    background: quote.status === 'Approved' ? '#D1FAE5' : 
                              quote.status === 'Rejected' ? '#FEE2E2' : '#FEF3C7',
                    color: quote.status === 'Approved' ? '#065F46' : 
                           quote.status === 'Rejected' ? '#991B1B' : '#92400E'
                  }}>
                    {quote.status}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" variant="outlined">View</Button>
                    <Button size="small" variant="outlined">Edit</Button>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

// Admin Contacts Tab
const AdminContactsTab = ({ navigate }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await api.get('/contacts');
        setContacts(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" gutterBottom>Contacts Management</Typography>
      </Box>
      <Box sx={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Name</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Email</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Subject</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Status</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact._id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px' }}>{contact.name}</td>
                <td style={{ padding: '12px' }}>{contact.email}</td>
                <td style={{ padding: '12px' }}>{contact.subject}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{ 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    background: contact.status === 'Resolved' ? '#D1FAE5' : 
                              contact.status === 'In Progress' ? '#FEF3C7' : '#DBEAFE',
                    color: contact.status === 'Resolved' ? '#065F46' : 
                           contact.status === 'In Progress' ? '#92400E' : '#1E40AF'
                  }}>
                    {contact.status}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>
                  <Button size="small" variant="outlined">View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Card, Typography, Box } from '@mui/material';
import api from '../../services/api';

const ClientMap = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await api.get('/clients');
        setClients(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchClients();
  }, []);

  // Fix default markers
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
  });

  return (
    <Card sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6" gutterBottom>Clients Location</Typography>
      <Box sx={{ height: '500px' }}>
        <MapContainer center={[-6.2088, 106.8456]} zoom={10} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {clients.map(client => (
            <Marker key={client._id} position={client.location.coordinates}>
              <Popup>
                <Typography variant="h6">{client.name}</Typography>
                <Typography>Industry: {client.industry}</Typography>
                <Typography>Contact: {client.contactPerson}</Typography>
                <Typography>Phone: {client.phone}</Typography>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Card>
  );
};

export default ClientMap;
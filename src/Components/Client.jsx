import { useState, useEffect } from 'react';
import axios from 'axios';
function Client({ userId }) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/users/1/clients`)
      .then(response => {
        setClients(response.data.data || response.data);
      })
      .catch(error => console.error('Error fetching clients:', error));
  }, [userId]);

  return (
    <div className="text-xl">
      <h2>Clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id}>{client.name} ({client.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default Client;

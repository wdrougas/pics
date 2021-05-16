import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8tQ1hOOllOxZvURQkDrrRdSN7RMcf6o2SVrxC2uW92Q'
  }
});
import axios from 'axios';

export async function getSales() {
  const token = localStorage.getItem('token');
  const data = axios
    .get('https://inventory-backend-six.vercel.app/api/getsales', {
      headers: {
        'x-auth-token': token,
      },
    })
    .catch((error) => {
      throw error;
    });

  return data;
}

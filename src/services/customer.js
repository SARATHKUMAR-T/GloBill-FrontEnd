import axios from 'axios';

export async function getCustomers() {
  const token = localStorage.getItem('token');
  const data = axios
    .get('https://inventory-backend-six.vercel.app/api/getcustomers', {
      headers: {
        'x-auth-token': token,
      },
    })
    .catch((error) => {
      throw error;
    });

  return data;
}

import axios from 'axios';

export async function getUser() {
  const token = localStorage.getItem('token');
  const data = axios
    .get('https://inventory-backend-six.vercel.app/api/getuser', {
      headers: {
        'x-auth-token': token,
      },
    })
    .catch((error) => {
      throw error;
    });

  return data;
}

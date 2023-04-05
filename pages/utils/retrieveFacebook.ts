import axios from 'axios';

export default async function retrieveFacebook() {
  try {
    const response = await axios.get('/api/facebook');
    return response.data;
  } catch (error) {
    console.error('Error fetching Facebook review data:', error);
    throw error;
  }
}
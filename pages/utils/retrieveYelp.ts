import axios from "axios"

export default async function retrieveYelp() {
  try {
    const response = await axios.get('/api/yelp')
    const relevantData = {rating: response.data.rating, review_count: response.data.review_count}
    return relevantData;
  } catch (error) {
    console.error('Error fetching review score:', error);
    throw error;
  }
}
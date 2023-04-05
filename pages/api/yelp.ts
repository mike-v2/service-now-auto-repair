import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const businessID = "service-now-auto-repair-battleground";

const yelpAxios = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_YELP_API_KEY}`,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /* try {
    const response = await yelpAxios.get(`/businesses/${businessID}`);
    const { rating } = response.data;
    return rating;
  } catch (error) {
    console.error('Error fetching review score:', error);
    throw error;
  } */

  try {
    const response = await yelpAxios.get(`/businesses/${businessID}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching review score:', error);
    res.status(500).json({ error: 'Error fetching review score' });
  }
}
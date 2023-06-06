import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = 'https://api.yelp.com/v3/businesses/service-now-auto-repair-battleground';

    const response = await fetch(url,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        }
      });

    if (response.status === 200) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      const errorData = await response.json();
      console.error('Error fetching Yelp review score:', errorData);
      res.status(response.status).json({ error: 'Error fetching Yelp review score' });
    }
  } catch (error) {
    console.error('Error fetching review score:', error);
    res.status(500).json({ error: 'Error fetching review score' });
  }
}
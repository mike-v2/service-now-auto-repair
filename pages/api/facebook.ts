"https://graph.facebook.com/{api-endpoint}&access_token={your-app_id}|{your-app_secret}"

import axios from 'axios';

const pageId = '442764591205817';
const appId = '886537885760736';

const accessToken = `${appId}|${process.env.NEXT_PUBLIC_FACEBOOK_SECRET}`;

const apiURL = `https://graph.facebook.com/v16.0/${pageId}?fields=overall_star_rating,rating_count&access_token=${accessToken}`; //`https://graph.facebook.com//${pageId}?fields=overall_star_rating,rating_count`;


export default async function handler(req, res) {
  axios.get(apiURL)
    .then(response => {
      console.log(response);
      res.status(200).json(response.data);
    })
    .catch(error => {
      console.error(error.response.data || error);
      res.status(500).json({ error: 'Error fetching Facebook review data' });
    })

  /* try {
    const response = await axios.get(apiURL);
    const { overall_star_rating, rating_count } = response.data;
    res.status(200).json({ overall_star_rating, rating_count });
  } catch (error) {
    console.error('Error fetching Facebook review data:', error.response.data || error);
    res.status(500).json({ error: 'Error fetching Facebook review data' });
  } */
}
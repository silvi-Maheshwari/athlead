import axios from 'axios';

const API_URL = 'http://localhost:5000/api/scrape';

export const scrapeProductData = async (url) => {
  try {
    const response = await axios.post(API_URL, { url });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
import axios from 'axios';

import { ArticleResponseType } from '../types/types';

const BASE_URL = 'https://newsapi.org/v2/';
const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const instance = axios.create({
  baseURL: BASE_URL,
  params: { apiKey },
});

export const newsAPI = {
  async fetchTopHeadlines(): Promise<ArticleResponseType> {
    const response = await instance.get('top-headlines?country=us&pageSize=100&page=1');

    return response.data;
  },
};

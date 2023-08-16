import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { newsAPI } from '../api/newsAPI';
import { ArticleType, ErrorResponseDataType } from '../types/types';

type ArticleStore = {
  articles: ArticleType[];
  totalResults: number;
  loading: boolean;
  error: ErrorResponseDataType | null;
  fetchArticles: () => Promise<void>;
};

const useArticleStore = create<ArticleStore>()(
  devtools((set) => ({
    articles: [],
    totalResults: 0,
    loading: false,
    error: {
      status: '',
      message: '',
      code: '',
    },
    fetchArticles: async () => {
      set({ loading: true });

      try {
        const response = await newsAPI.fetchTopHeadlines();

        set({
          articles: response.articles,
          totalResults: response.totalResults,
          loading: false,
          error: null,
        });
      } catch (error: any) {
        const { status, message, code } = error.response.data;

        set({ loading: false, error: { status, code, message } });
      } finally {
        set({ loading: false });
      }
    },
  })),
);

export default useArticleStore;

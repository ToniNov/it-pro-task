export type ArticleType = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type ArticleResponseType = {
  status: string;
  totalResults: number;
  articles: ArticleType[];
};

export type ErrorResponseDataType = {
  code: string;
  message: string;
  status: string;
};

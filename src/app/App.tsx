import { FC } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ArticlePage } from '../pages/ArticlePage/ArticlePage';
import { MainPage } from '../pages/MainPage/MainPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './App';
import './index.css';
import Index from './routes';
import Login from './routes/login';
import Quiz from './routes/quiz';
import Quizzes from './routes/quizzes';
import QuizResult from './routes/result';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />

          <Route path="quizzes" element={<Quizzes />} />
          <Route path="quizzes/:quizId" element={<Quiz />} />
          <Route path="quizzes/:quizId/result" element={<QuizResult />} />

          <Route path="login" element={<Login />} />
          
          <Route
            path="*"
            element={
              <h1 className='text-gray-400 text-center m-0 pb-8'>Not Found</h1>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

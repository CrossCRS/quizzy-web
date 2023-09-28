import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './App';
import './index.css';
import AuthProvider from './hooks/useAuth';
import IndexPage from './routes';
import LoginPage from './routes/login';
import LogoutPage from './routes/logout';
import QuizPage from './routes/quiz';
import QuizzesPage from './routes/quizzes';
import QuizResultPage from './routes/result';
import UserQuizzes from './routes/userQuizzes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<IndexPage />} />

            <Route path="quizzes" element={<QuizzesPage />} />
            <Route path="quizzes/:quizId" element={<QuizPage />} />
            <Route path="quizzes/:quizId/result" element={<QuizResultPage />} />

            <Route path="users/:userName" element={<UserQuizzes />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="logout" element={<LogoutPage />} />

            <Route
              path="*"
              element={
                <h1 className='text-gray-400 text-center m-0 pb-8'>Not Found</h1>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);

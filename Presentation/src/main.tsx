import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './layout/ThemeContext';

const getBasename = () => {
  const repoName = import.meta.env.VITE_REPO_NAME;

  if (import.meta.env.DEV) return '';

  return repoName ? `/${repoName}` : '';
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

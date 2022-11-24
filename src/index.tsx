import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './vitals/reportWebVitals';

import GlobalStyles from './styles/GlobalStyles';
import App from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

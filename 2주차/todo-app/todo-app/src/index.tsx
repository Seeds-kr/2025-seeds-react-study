import React from 'react';
import ReactDOM from 'react-dom/client'; // import 변경
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // createRoot 사용
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

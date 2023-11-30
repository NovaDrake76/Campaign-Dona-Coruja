import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./routes/Root";
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = rootElement || document.createElement("div");
if (!rootElement) document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
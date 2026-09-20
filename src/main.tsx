import { TonConnectUIProvider } from '@tonconnect/ui-react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl="https://chef-3.onrender.com/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider>
  </StrictMode>,
);

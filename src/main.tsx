import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
import { Provider } from 'react-redux'
import { store } from './store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <CustomProvider theme="light">
        <App />
      </CustomProvider>
    </Provider>
  </StrictMode>,
)

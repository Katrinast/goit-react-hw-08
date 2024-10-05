import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'

import "modern-normalize"
import App from './components/App/App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <App />
          </BrowserRouter>
      </PersistGate>
    </Provider>
    
  </StrictMode>,
)

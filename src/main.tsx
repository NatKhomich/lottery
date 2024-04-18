import { Provider } from 'react-redux'

import { App } from '@/app/App'
import { store } from '@/app/store'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)

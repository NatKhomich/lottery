import { Provider } from 'react-redux'

import { store } from '@/app/model/store'
import { App } from '@/app/ui/App'
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

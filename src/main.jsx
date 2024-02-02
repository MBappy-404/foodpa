import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { FloatButton } from 'antd'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './provider/AuthProvider.jsx'
import 'aos/dist/aos.css';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Aos from 'aos'
// Initialization for ES Users
Aos.init();
const queryClient = new QueryClient()
 

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div>
            <RouterProvider router={router} />
            <FloatButton.BackTop style={{color: "white", backgroundColor:'#FFA200'}} type="#FFA200" duration={1500} />
          </div>
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

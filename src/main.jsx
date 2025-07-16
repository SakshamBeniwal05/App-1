import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import store from './storage/storage.js'
import Login_page from './pages/login_page.jsx'
import Home from './pages/Home.jsx'
import SignUp_Page from './pages/Signup_page.jsx'
import Protection from './components/containers/AUth_Protection.jsx'
import All_Posts_page from './pages/All_Posts_page.jsx'
import Add_Post_page from './pages/Add_Post_page.jsx'
import Edit_Post_page from './pages/Edit_Post_page.jsx'
import Post from './pages/Post_page.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Protection authentication={false}><Login_page /></Protection>
      },
      {
        path: '/signup',
        element: <Protection authentication={false}><SignUp_Page /></Protection>
      },
      {
        path: '/all-posts',
        element: <Protection authentication={true}><All_Posts_page /></Protection>
      },
      {
        path: '/add-post',
        element: <Protection authentication={true}><Add_Post_page /></Protection>
      },
      {
        path: '/edit-post/:slug',
        element: <Protection authentication={true}><Edit_Post_page /></Protection>
      },
      {
        path: '/post/:slug',
        element: <Protection authentication={true}><Post /></Protection>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
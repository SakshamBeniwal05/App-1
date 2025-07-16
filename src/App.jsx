import { useDispatch } from 'react-redux';
import './App.css';
import authService from './services/auth.js'
import { useState, useEffect } from 'react';
import { login, logout } from './storage/slices/status.js'
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import { Outlet } from 'react-router-dom';
function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.currentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => {
        setloading(false)
      })
  }, [])

  return !loading ? (
    <>
      <Header/>  
      <div>
        <Outlet />
      </div>
      <Footer />
      
    </>
  ) : null
}

export default App

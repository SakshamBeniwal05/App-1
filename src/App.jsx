import { useDispatch } from 'react-redux';
import './App.css';
import authService from './services/auth.js'
import { useState, useEffect } from 'react';
import { login, logout } from './storage/slices/status.js'
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
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
      <div className='flex justify-center items-center bg-[#1e1e1e] h-screen'>
        <div className='flex items-center justify-center w-11/12 bg-[#2e2e2e] h-11/12 text-white font-bold text-3xl'>HELLO WORLD</div>
      </div>
      <Footer />
    </>
  ) : null
}

export default App

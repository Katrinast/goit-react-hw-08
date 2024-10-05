import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { useEffect, lazy } from 'react'
import { refreshUser } from '../../redux/auth/operations'
import { selectIsRefreshing } from '../../redux/auth/selectors'
import Layout from "../Layout";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'))
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'))
const RegisterPage = lazy(()=> import('../../pages/RegisterPage/RegisterPage'))



export default function App() {
  const dispatch = useDispatch();
 const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
dispatch(refreshUser)


  }, [dispatch])

  
  
  return (
    <Layout>
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage/> } />
        <Route path="/register" element={<RegisterPage/> } />
         <Route path="/login" element={<LoginPage/>} />
      
      </Routes>
      </Layout>
)

}

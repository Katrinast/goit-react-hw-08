import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { useEffect, lazy, Suspense } from 'react'
import { refreshUser } from '../../redux/auth/operations'
import { selectIsRefreshing } from '../../redux/auth/selectors'
import Layout from "../Layout";
import  RestrictedRoute  from "../RestrictedRoute";
import  PrivateRoute from "../PrivateRoute"

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

  
  
  return isRefreshing ? (
    <div> Refreshing </div>
  ) :  (
    <Layout>
      
    <Suspense fallback={null}>
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>} redirectTo="/login" /> } />
        <Route path="/register"  element={ <RestrictedRoute component={<RegisterPage/> } redirectTo="/"/>} />
         <Route path="/login" element={ <RestrictedRoute component={<LoginPage/>} redirectTo="/contacts" />} />
      
        </Routes>
      </Suspense>
      
      </Layout>
)

}

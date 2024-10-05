import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { useEffect, lazy, Suspense } from 'react'
import { refreshUser } from '../../redux/auth/operations'
import { selectIsRefreshing } from '../../redux/auth/selectors'

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
    <Suspense>
  <Routes>
      <Route path="/" element={<HomePage />} />
      
      </Routes>
      </Suspense>
)

}

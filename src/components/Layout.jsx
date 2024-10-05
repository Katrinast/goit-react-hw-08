import AppBar from '../components/AppBar/AppBar';
import { Suspense } from 'react';

export default function Layout({children}){
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar/>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  )
}
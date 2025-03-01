import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import Header from './components/layouts/Header'
import Hero from './components/Hero'
import Body from './components/body'
import Footer from './components/layouts/footer'

const Layout = () => {
  return (
    <div className="min-h-screen  text-white dark:bg-black bg-[#F9F9F9]">
      <Header />
      <main className="pt-20">
        <Outlet />
        <Hero/>
        <Body/>
      </main>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <div>{/* Hero section will go here */}</div>,
      },
      {
        path: '/login',
        element: <div>Login Page</div>,
      },
      {
        path: '/signup',
        element: <div>Sign Up Page</div>,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App

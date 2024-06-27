import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
}
  from 'react-router-dom'

import { useState } from 'react';
//LAYOUTS & COMPONENTS

import Auth from './components/Auth';
import RootLayout from './Layouts/RootLayout'
//PAGES

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { DataProvider } from './pages/DataContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);




  const handleAuth = () => {
    setIsAuthenticated(true);
  };
  const router = createBrowserRouter(
    { basename: '/fralon-peanuts' },
    createRoutesFromElements(

      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:productId" element={<Product />} />

        <Route path="recipes" element={<Recipes />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <div>
      <DataProvider>
        {isAuthenticated ? (
          <RouterProvider router={router} />
        ) : (
          <Auth onAuth={handleAuth} />
        )}

      </DataProvider>
    </div>

  )
}

export default App

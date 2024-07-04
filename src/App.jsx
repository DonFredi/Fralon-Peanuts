import React, { useState, Suspense, lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { DataProvider } from './pages/DataContext';
import Auth from './components/Auth';
import RootLayout from './Layouts/RootLayout';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const Recipes = lazy(() => import('./pages/Recipes'));
const Contact = lazy(() => import('./pages/Contact'));
const Product = lazy(() => import('./pages/Product'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Products = lazy(() => import('./pages/Products'));
const Cart = lazy(() => import('./pages/Cart'));
const Benefits = lazy(() => import('./pages/Benefits'));
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = () => {
    setIsAuthenticated(true);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense fallback={<div>Loading Products...</div>}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path="product/:productId"
          element={
            <Suspense fallback={<div>Loading Product...</div>}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="recipes"
          element={
            <Suspense fallback={<div>Loading Recipes...</div>}>
              <Recipes />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Loading Cart...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<div>Loading Contact...</div>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="benefits"
          element={
            <Suspense fallback={<div>Loading Benefits...</div>}>
              <Benefits />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading Not Found...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    )
  );

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
  );
}

export default App;

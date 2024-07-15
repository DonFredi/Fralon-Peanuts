import React, { Suspense, lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import { DataProvider } from './pages/DataContext';
import RootLayout from './Layouts/RootLayout';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Loading from './components/Loading';

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
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/fralon-peanuts" replace />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/fralon-peanuts" element={<RootLayout />}>
          <Route index element={<Suspense fallback={<Loading message="Loading Home..." />}><Home /></Suspense>} />
          <Route path="home" element={<Suspense fallback={<Loading message="Loading Home..." />}><Home /></Suspense>} />
          <Route path="products" element={<Suspense fallback={<Loading message="Loading Products..." />}><Products /></Suspense>} />
          <Route path="product/:productId" element={<Suspense fallback={<Loading message="Loading Product..." />}><Product /></Suspense>} />
          <Route path="recipes" element={<Suspense fallback={<Loading message="Loading Recipes..." />}><Recipes /></Suspense>} />
          <Route path="cart" element={<Suspense fallback={<Loading message="Loading Cart..." />}><Cart /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<Loading message="Loading Contact..." />}><Contact /></Suspense>} />
          <Route path="benefits" element={<Suspense fallback={<Loading message="Loading Benefits..." />}><Benefits /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<Loading message="Loading Not Found..." />}><NotFound /></Suspense>} />
        </Route>
      </>
    )
  );

  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;

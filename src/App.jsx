import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
}
  from 'react-router-dom'


//LAYOUTS
import RootLayout from './Layouts/RootLayout'
//PAGES

import Home from './pages/Home';
import Recipes from './pages/Recipes'
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { DataProvider } from './pages/DataContext';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>

        <Route index element={<Home />} />
        <Route path="products" element={<Products />} >
          <Route element={<Image />} />
        </Route>
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
        <RouterProvider router={router}>
          <RootLayout />
        </RouterProvider>
      </DataProvider>
    </div>

  )
}

export default App

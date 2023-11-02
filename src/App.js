import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ProductDetailPage from './pages/ProductDetail';

/* const routesDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage />} />
    <Route path='/products' element={<ProductsPage />} />
  </Route>
);

const router = createBrowserRouter(routesDefinitions); */

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Welcome } from './pages/welcome';
import { SecondPage } from './pages/second-page';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Welcome />
    },
    {
      path: '/second-page',
      element: <SecondPage />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
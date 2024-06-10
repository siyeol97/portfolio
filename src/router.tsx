import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Contents from './components/Contents/Contents';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/contents',
    element: <Contents />,
  },
]);

export default router;

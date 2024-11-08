import { createBrowserRouter } from 'react-router-dom';
import Contents from './components/Contents/Contents';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Contents />,
  },
]);

export default router;

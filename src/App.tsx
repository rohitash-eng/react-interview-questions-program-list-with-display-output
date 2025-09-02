import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, RouteObject } from 'react-router-dom';
import FeaturesPage from './pages/FeaturesPage';
import coreCssRoutes from './features/coreCss/coreCssRoutes';
import bootstrapCssRoutes from './features/bootstrapCss/bootstrapCssRoutes';

function App() {
  const allRoutes: RouteObject[]  = [
    {
      path: '/',
      element: <FeaturesPage />,
    },
    ...coreCssRoutes,
    ...bootstrapCssRoutes,
  ];
  return (
    <Router>
      <Routes>
        {allRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((childRoute, childIndex) => (
              <Route key={childIndex} path={childRoute.path} element={childRoute.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { RouteObject } from 'react-router-dom';
import CoreCssDashboard from './CoreCssDashboard';
import BasicExampleOfCss from './components/BasicExampleOfCss';
import Chess from './components/Chess';
import FloatAndClear from './components/FloatAndClear';
import CenterAlign from './components/CenterAlign';

const coreCssRoutes: RouteObject[] = [
  {
    path: 'learn-core-css',
    element: <CoreCssDashboard />,
    children: [
      { path: 'basics', element: <BasicExampleOfCss /> },
      { path: 'chess', element: <Chess /> },
      { path: 'float-n-clear', element: <FloatAndClear /> },
      { path: 'center-align', element: <CenterAlign /> },
    ],
  },
];

export default coreCssRoutes;

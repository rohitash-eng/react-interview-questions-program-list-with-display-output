import React from 'react';
import { RouteObject } from 'react-router-dom';
import BootstrapExample1 from './components/BootstrapExample1';
import BootstrapExample2 from './components/BootstrapExample2';
import FeatureDashboardBootstrap from './FeatureDashboardBootstrap';
import EditorWebsite from './components/EditorWebsite';
import Programs from './components/Programs';

const bootstrapCssRoutes: RouteObject[] = [
  {
    path: 'learn-bootstrap-css',
    element: <FeatureDashboardBootstrap />,
    children: [
        { path: 'basics', element: <BootstrapExample1 /> },
        { path: 'chess', element: <BootstrapExample2 /> },
        { path: 'editor-website', element: <EditorWebsite /> },
        { path: 'programs-list', element: <Programs /> },
    ],
  },
];

export default bootstrapCssRoutes;

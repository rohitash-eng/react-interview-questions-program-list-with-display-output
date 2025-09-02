import React from 'react';
import { RouteObject } from 'react-router-dom';
import FeatureDashboardBootstrap from './FeatureDashboardBootstrap';
import EditorWebsite from './components/EditorWebsite';
import Programs from './components/Programs';

const bootstrapCssRoutes: RouteObject[] = [
  {
    path: 'learn-bootstrap-css',
    element: <FeatureDashboardBootstrap />,
    children: [
        { path: 'editor-website', element: <EditorWebsite /> },
        { path: 'programs-list', element: <Programs /> },
        { path: 'html-n-editor', element: <EditorWebsite /> },
    ],
  },
];

export default bootstrapCssRoutes;

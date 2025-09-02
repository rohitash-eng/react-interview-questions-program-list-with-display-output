import '../assets/styles/feature.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Menu from '../layouts/Menu';
import CommonProgramFormatComponent from '../components/common/components/CommonProgramFormatComponent';

const FeaturesPage = () => (
  <>
    <Menu />
    <h2 style={{ padding: '10px' }}>Javascript Interview question and answer</h2>
    <CommonProgramFormatComponent />
  </>
  
);

export default FeaturesPage;
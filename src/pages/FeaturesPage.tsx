import '../assets/styles/feature.css';
import CommonProgramFormatComponent from '../components/common/components/CommonProgramFormatComponent';
import Menu from '../layouts/Menu';
import Home from './TaskItems.tsx/Home';

const FeaturesPage = () => (
  <>
    <Menu />
    <Home />
    <h2 style={{ padding: '10px' }}>Javascript Interview question and answer</h2>
    <CommonProgramFormatComponent />
  </>
  
);

export default FeaturesPage;
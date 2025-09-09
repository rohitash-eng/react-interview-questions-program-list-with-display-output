import '../../../assets/styles/programs-normal.css';
import styles from '../../../assets/styles/programs.module.css';
import { curryingInJavascript } from './curryingInJavascript';
import { customPipeInJavascript } from './customPipeInJavascript';
import { programs_14 } from "./FourteenPrograms";
import { GCD } from "./GCD";
import { marvelsSolutionInJavascript } from './marvelsSolutionInJavascript';
const CommonProgramFormatComponent = () => {
    const exampleHtml = programs_14 + GCD + customPipeInJavascript + curryingInJavascript + marvelsSolutionInJavascript;
    return <div className={styles.programContainer} dangerouslySetInnerHTML={{ __html: exampleHtml }} />;
};

export default CommonProgramFormatComponent;
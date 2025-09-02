import React from "react";
// this is Module css example
import styles from '../../../assets/styles/programs.module.css';
import '../../../assets/styles/programs-normal.css';
import { programs_14 } from "./FourteenPrograms";
const CommonProgramFormatComponent = () => {
    const exampleHtml = programs_14;
    return <>
        <div className={styles.programContainer} dangerouslySetInnerHTML={{ __html: exampleHtml }} />
    </>;
};

export default CommonProgramFormatComponent;
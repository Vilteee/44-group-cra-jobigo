import style from './Main.module.css';
import { Section1 } from './sections/section1/Section1';
import { Section2 } from './sections/section2/Section2';
import { Section3 } from './sections/section3/Section3';


export function Main({statisticData,seekersData }) {
    return (
        <main className={style.main}>
            <Section1 section1Data={statisticData}/>
            <div className={style.sectionsSecondThird}>
                <Section2 section2Data={seekersData} /> 
                <Section3 /> 
            </div>
        </main>
    )
}
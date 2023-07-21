import style from './Section2.module.css';
import { ColumnSeekers } from '../../ColumnSeekers';

export function Section2(section2Data) {
    return (
        <section className={style.section2}>
            <p className={style.titleSeekers}>Suggested job Seekers</p>
            <ColumnSeekers columnSeekersData={section2Data[0]}  />
            <ColumnSeekers columnSeekersData={section2Data[1]}/>
            <ColumnSeekers columnSeekersData={section2Data[2]}/>
        </section>
    )
}
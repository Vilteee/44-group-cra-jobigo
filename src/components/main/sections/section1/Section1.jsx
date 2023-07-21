import style from './Section1.module.css';
import { ColumnWelcome } from '../../ColumnWelcome';
import { Column } from '../../Column';

export function Section1({section1Data}) {
    return (
        <section className={style.section1}>
            <ColumnWelcome />
            <Column columnData={section1Data[0]} />
            <Column columnData={section1Data[1]} />
            <Column columnData={section1Data[2]} />
            <Column columnData={section1Data[3]} />
        </section>
    )
}
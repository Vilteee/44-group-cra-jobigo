import style from './Main.module.css';
import renesis from '../../img/renesis.png';


export function ColumnWelcome () {
    return (
        <div className={style.columnWelcome}>
            <img src={renesis} alt="Renesis Tech" />
            <p className='paraWelcome'>Welcome to</p>
            <p>Renesis Tech PVTLtd.</p>
        </div>
            

    )
}
import style from './Button.module.css';
import {RiSuitcase2Line} from 'react-icons/ri';

let btnText = 'Post A job'
export function Button() {
    return(
        <button className={style.btnPurple} type='button'><RiSuitcase2Line/>  {btnText} </button>
    )
}
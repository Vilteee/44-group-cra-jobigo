import style from './Header.module.css';
import logo from '../../img/logo.png';
import { Button } from '../button/Button';

let logoWidth = '250px';
export function Header() {
    return (
        <header className={style.header}>
            <div className={style.left}>
                <img className='logo' src={logo} width={logoWidth} alt="Logo" />
            </div> 
            <div className={style.right}>
                <form className={style.search}>
                    <input type='search'/>
                </form>
                <Button />
            </div>
        </header>
    )
}


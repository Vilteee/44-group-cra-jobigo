import style from './Main.module.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {TiMessage} from 'react-icons/ti';
import {PiMoneyThin} from 'react-icons/pi';
import {BiTime} from 'react-icons/bi';
import {MdWorkOutline} from 'react-icons/md';

export function ColumnSeekers ({columnSeekersData: {seekerPhoto, seekerName, seekerPosition, seekerIncome, seekerWorkingTime, seekerLevel }}) {
   
    return (
        <div className={style.columnSeekers}>
            <div className={style.headerSeeker}>
                <img 
                className={style.columnSeekersPhoto}
                src={seekerPhoto}
                alt="" />   
                <div className={style.headerSeekerLeft}>
                    <h3>{seekerName}</h3>
                    <p className={style.seekerPosition}>{seekerPosition}</p>
                </div>
                <div className={style.headerSeekerIcons}>
                    <AiOutlineHeart />
                    <TiMessage />
                </div>
            </div>
            <div className={style.seekerMoney}>
                < PiMoneyThin className={style.seekerMoneyIcon} />
                <p>{seekerIncome}</p>
            </div>
            <div className={style.seekerProperties}>
                <div className={style.seekerWorkingTime}>
                    <BiTime  className={style.seekerrWorkingTimeIcon}/>
                    {seekerWorkingTime}
                </div>
                <div className={style.seekerLevel}>
                    <MdWorkOutline className={style.seekerLevelIcon} />
                    {seekerLevel}
                </div>
            </div>
            <div className={style.inviteButton}>
                <button className={style.inviteButtonStyle}>Invite</button>
            </div>
        </div>
         
    

    )
}
import style from './AsideLeft.module.css';
import { CgMenuLeft } from 'react-icons/cg';
import { TfiLayoutGrid2 } from 'react-icons/tfi';
import { PiSuitcaseSimpleBold } from 'react-icons/pi'
import { MdOutlinePersonSearch } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import { MdOutlineNaturePeople } from 'react-icons/md';
import { LuMessagesSquare } from 'react-icons/lu';
import { BsPersonCircle } from 'react-icons/bs';
import { BiBell } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { GiPowerButton } from 'react-icons/gi';






 
export function AsideLeft() {
    return (
        <aside className={style.asideLeft}>
            <div className={style.asideLeftIcons}>
                <div>
                    < CgMenuLeft />
                </div>
                <div>
                    < TfiLayoutGrid2 />
                </div>
                <div>
                    < PiSuitcaseSimpleBold />
                </div>
                <div>
                    < MdOutlinePersonSearch />
                </div>
                <div>
                    < GoPeople />
                </div>
                <div>
                    < MdOutlineNaturePeople />
                </div>
                <div>
                    < LuMessagesSquare />
                </div>
                <div>
                    < BsPersonCircle />
                </div>
                    < BiBell />
                <div>
                    < FiSettings />
                </div>
                <div>
                    <p>ENG</p>
                    <img src="" alt="" />
                </div>
                <div>
                    < GiPowerButton />
                </div>     
            </div>
        </aside>
    )
}
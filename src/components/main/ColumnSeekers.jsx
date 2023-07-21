import style from './Main.module.css';


export function ColumnSeekers ({columnSeekersData: {seekerPhoto, seekerName, seekerPosition, seekerIncome, seekerWorkingTime, seekerLevel }}) {
   
    return (
        <div className={style.columnSeekers}>
            <div>
                <img src="" alt="" />
                <h3></h3>
                <p></p>
                <img src="" alt="" />
                <img src="" alt="" />
                </div>
            <div>
                <img src="" alt="" />
                <p></p>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
            </div>
            <button></button>
        </div>
         
    

    )
}
import style from './Main.module.css';



export function Column ({columnData: {icon, number, title, backgroundColor}}) {
   
    return (
        <div className={style.column} style={{backgroundColor: backgroundColor}}>
            {icon}
            <p className={style.number}>{number}</p>
            <p className={style.title}>{title}</p>
        </div>
         
    

    )
}
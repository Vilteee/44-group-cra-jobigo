import style from './Section3.module.css';
import { ColumnJobPosts } from '../../ColumnJobPosts';

export function Section3({section3Data}) {
    return (
        <section className={style.Section3}>
            <p className={style.jobPostsTitle}>Recent Job Posts</p> 
            <div className={style.jobPostsColumns}>
                < ColumnJobPosts columnJobPostsData={section3Data[0]}/>
                < ColumnJobPosts columnJobPostsData={section3Data[1]}/>
                < ColumnJobPosts columnJobPostsData={section3Data[2]}/>
            </div>
        </section>
    )
}
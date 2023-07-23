import style from './Main.module.css';
import { BsThreeDots } from 'react-icons/bs';
import {PiMoneyThin} from 'react-icons/pi';
import {MdWorkOutline} from 'react-icons/md';
import {BiTime} from 'react-icons/bi';
import { MdOutlineRateReview } from 'react-icons/md';


export function ColumnJobPosts({columnJobPostsData:{jobPosition, jobLocation, jobPostTime, jobEarnings, jobLevelNeeded, jobWorkingTime, jobApplicationsAmount, jobAdvantages}}) {
    return (
        <div className={style.columnJobPosts}>
            <div className={style.columnJobPostsHeader}>
                <div className={style.columnJobPostsHeaderLeft}>
                    <h3>{jobPosition}</h3>
                    <p className={style.jobLocation}>{jobLocation}</p>
                </div>
                <div className={style.columnJobPostsHeaderRight}>
                    <BsThreeDots className={style.threeDotsIcon}/>
                    <p className={style.jobPostTime}>{jobPostTime}</p>
                </div>
            </div>
            <div className={style.jobEarnings}>
                <PiMoneyThin className={style.jobMoneyIcon} />
                <p>{jobEarnings}</p>
            </div>
            <div className={style.jobPostsProperties}>
                <div className={style.JobLevel}>
                    < MdWorkOutline className={style.jobLevelIcon} />
                    <p>{jobLevelNeeded}</p>
                </div>
                <div className={style.jobWorkingTime}>
                    < BiTime className={style.jobWorkingTimeIcon}/>
                    <p>{jobWorkingTime}</p>
                </div>
                <div className={style.jobApplicants}>
                    < MdOutlineRateReview className={style.jobApplicantsIcon}/>
                    <p>{jobApplicationsAmount}</p>
                </div>
            </div>
            <p className={style.jobAdvantages}>{jobAdvantages}</p>

        </div>
    )
}
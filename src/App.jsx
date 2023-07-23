import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { AsideRight } from './components/asideRight/AsideRight';
import {AsideLeft} from './components/asideLeft/AsideLeft';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { GiOpenPalm } from 'react-icons/gi';
import { VscGraphLine } from 'react-icons/vsc';


function App() {

let jobsPost = '254';
let jobsPostIcon =   <AiOutlineFileSearch className='jobsPostIcon' />;
let applicantsNumber = '2524';
let applicantIcon = <IoIosPeople className='applicantIcon' />;
let jobsClosed = '220';
let jobsClosedIcon = < GiOpenPalm className='jobsClosedIcon' />;
let hiredSuccess = '60%';
let hiredSuccessIcon = <VscGraphLine className='hiredSuccessIcon' />;

  const data = [
    {
      id: 1,
      icon: jobsPostIcon,
      number: jobsPost,
      title:'Jobs Posted',
      backgroundColor: 'rgb(248, 229, 194)'
    },
    {
      id: 2,
      icon: applicantIcon,
      number: applicantsNumber,
      title:'Applicants',
      backgroundColor: 'rgb(223, 223, 239)'
    },
    {
      id: 3,
      icon: jobsClosedIcon,
      number: jobsClosed,
      title:'Jobs Closed',
      backgroundColor: 'rgb(242, 212, 204)'
    },
    {
      id: 4,
      icon: hiredSuccessIcon,
      number: hiredSuccess,
      title:'Hired Success',
      backgroundColor: ' rgb(209, 242, 229)'
    }

  ]

  const data1 = [
    {
      seekerPhoto: './img/seekers/seeker1.png',
      seekerName: 'Muhammad Zahid',
      seekerPosition: 'UI/UX Designer',
      seekerIncome:'22,174 - 40,234 VND', 
      seekerWorkingTime:'Full Time',
      seekerLevel:'Junior Managment'

    },
    {
      seekerPhoto: './img/seekers/seeker2.png',
      seekerName: 'Samra Khawar',
      seekerPosition: 'HR Manager',
      seekerIncome:'22,174 - 40,234 VND', 
      seekerWorkingTime:'Full Time',
      seekerLevel:'Junior Managment'

    },
    {
      seekerPhoto: './img/seekers/seeker3.png',
      seekerName: 'Asif Ahmed',
      seekerPosition: 'Laravel Developer',
      seekerIncome:'22,174 - 40,234 VND', 
      seekerWorkingTime:'Full Time',
      seekerLevel:'Junior Managment'

    }
  ]

  const data2 = [
    {
      jobPosition:'Web Developer',
      jobLocation:'San Francisco',
      jobPostTime:'6 days ago',
      jobEarnings:'22,174 - 40,234 VND',
      jobLevelNeeded:'Experienced',
      jobWorkingTime:'Seasonal',
      jobApplicationsAmount:'15 Applications',
      jobAdvantages:'Unforgetable travel experiences, calm work places, friendly team, flexible work hours, remote working.'
    },
    {
      jobPosition:'iOS Developer',
      jobLocation:'Las vegas',
      jobPostTime:'4 days ago',
      jobEarnings:'30,174 - 55,234 VND',
      jobLevelNeeded:'Experienced',
      jobWorkingTime:'Full time',
      jobApplicationsAmount:'5 Applications',
      jobAdvantages:'Unforgetable travel experiences, calm work places, friendly team, flexible work hours, remote working.'

    },
    {
      jobPosition:'3D Animator',
      jobLocation:'Washington',
      jobPostTime:'3 days ago',
      jobEarnings:'35,174 - 45,455 VND',
      jobLevelNeeded:'Experienced',
      jobWorkingTime:'Part-time',
      jobApplicationsAmount:'8 Applications',
      jobAdvantages:'Unforgetable travel experiences, calm work places, friendly team, flexible work hours, remote working.'

    }
  ]
  return (
    <div className="app">
      <AsideRight />
      <Header />
      <Main statisticData={data} seekersData={data1} jobPostsData={data2}/>
      <AsideLeft />
      
    </div>
  );
}

export default App;

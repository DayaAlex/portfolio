import React from 'react'
import {
   VerticalTimelineElement,
   VerticalTimeline
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'


function Experience() {
  return (
    <div className='Experience'>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement
       className='vertical-timeline-element--education'
       date='2013'
       iconStyle={{background:'#3e497a',color:'#fff'}}
       icon={<SchoolIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>
          Kendriya Vidyalaya No.2, Naval Base, Kochi, Kerala
        </h3>
        <p>10th CGPA-10</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
       className='vertical-timeline-element--education'
       date='2015'
       iconStyle={{background:'#3e497a',color:'#fff'}}
       icon={<SchoolIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>
          Kendriya Vidyalaya No.2, Naval Base, Kochi, Kerala
        </h3>
        <p>12th Computer Science Percentage-95%</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
       className='vertical-timeline-element--education'
       date='2015-2019'
       iconStyle={{background:'#3e497a',color:'#fff'}}
       icon={<SchoolIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>
          Rajiv Gandhi Institute of Technology,Kottayam, Kerala
        </h3>
        <p>B.Tech Civil Engineering CGPA-7.9</p>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
       className='vertical-timeline-element--education'
       date='2020-2021'
       iconStyle={{background:'#3e497a',color:'#fff'}}
       icon={<SchoolIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>
          Annamalai University
        </h3>
        <p>Post Graduate Diploma in Computer Apllications</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
       className='vertical-timeline-element--education'
       date='2022-2024'
       iconStyle={{background:'#3e497a',color:'#fff'}}
       icon={<SchoolIcon/>}
      >
        <h3 className='vertical-timeline-element-title'>
          College of Engineering Trivandrum, Kerala
        </h3>
        <p>M.Tech Artificial Intelligence</p>
      </VerticalTimelineElement>


      </VerticalTimeline>


    </div>
  )
}

export default Experience
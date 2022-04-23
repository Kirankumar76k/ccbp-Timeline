// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-container">
      <div className="title-card">
        <h1 className="course-head">{courseTitle}</h1>
        <p className="duration">
          <AiFillClockCircle />
          {duration}
        </p>
      </div>
      <p className="course-desc">{description}</p>
      <div className="list-items">
        {tagsList.map(eachItem => (
          <p className="item">{eachItem.name}</p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard

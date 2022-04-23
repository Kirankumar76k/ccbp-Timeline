// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {title, courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-container">
      <div>
        <h1>{courseTitle}</h1>
        <p>
          <AiFillClockCircle />
          {duration}
        </p>
        <p className="course-desc">{description}</p>
        <div className="list-items">
          {tagsList.map(eachItem => (
            <p>{eachItem.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CourseTimelineCard

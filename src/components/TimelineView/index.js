// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderItems = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projectDetails={item} key={item.id} />
    }
    return <CourseTimelineCard courseDetails={item} key={item.id} />
  }

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">
          MY JOURNEY OF <br />
          <span className="ccbp"> CCBP 4.0</span>
        </h1>

        <div
          className="chrono-container"
          style={{width: '1210px', height: '950px'}}
        >
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(eachItem => renderItems(eachItem))}
          </Chrono>
        </div>
      </div>
    </div>
  )
}
export default TimelineView

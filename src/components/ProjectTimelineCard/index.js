// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

//  title: '21 DECEMBER 2020',
//     projectTitle: 'Tourism Website',
//     description:
//       'A tourism website enables the user to browse through the images of popular destinations.',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
//     duration: '1 hr',
//     projectUrl: 'https://tourismapp.ccbp.tech/',

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    // id,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div>
        <h1 className="project-head">{projectTitle}</h1>
        <p>
          <AiFillCalendar size="20px" />
          {duration}
        </p>
      </div>
      <p className="project-desc">{description}</p>
      <a href={projectUrl} className="project-url">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard

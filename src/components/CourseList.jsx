import './CourseList.css'

const CourseList = ({courses}) => (
        <div className="course-list">
            { Object.values(courses).map(id => (
                <div className="course-card" key={id}>
                    <div className="course-term-number"> {id.term} CS {id.number} </div>
                    <div className='course-card-top'>
                        {id.title}
                    </div>
                    <div className='course-card-bottom'>{id.meets}</div>
                </div>
            ))}
        </div>
);

export default CourseList;
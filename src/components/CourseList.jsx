import './CourseList.css'
import { isConflicting } from '../utilities/time-filter';

const CourseList = ({courses, selection, selectedCourses, setSelectedCourses}) => {

    const toggleSelectedCourses = (item) => setSelectedCourses(
        selectedCourses.includes(item)
        ? selectedCourses.filter(x => x !== item)
        : ( !isConflicting(selectedCourses,item) ? [...selectedCourses, item] : selectedCourses)
    );

    const isSelected = (item) => (selectedCourses.includes(item));

    return (
        <div className="course-list">
            { Object.values(courses).filter(item => (item.term == selection)).map(id => (
                <div
                    className={ isSelected(id) ? "course-card-selected" : (isConflicting(selectedCourses, id) ? "course-card-conflicting" : "course-card")}
                    key={[id.term,id.number].join('-')}
                    onClick={() => toggleSelectedCourses(id)}
                >
                    <div className="course-term-number"> {id.term} CS {id.number} </div>
                    <div className='course-card-top'>
                        {id.title}
                    </div>
                    <div className='course-card-bottom'>{id.meets}</div>
                </div>
            ))}
        </div>
    )
};

export default CourseList;
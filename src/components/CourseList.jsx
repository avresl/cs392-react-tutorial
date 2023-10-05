import './CourseList.css'
import { useState } from 'react';

const CourseList = ({courses, selection}) => {
    const [selected, setSelected] = useState([]);

    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );

    const isSelected = (item) => (selected.includes(item));

    return (
        <div className="course-list">
            { Object.values(courses).filter(item => (item.term == selection)).map(id => (
                <div className={ isSelected(id) ? "course-card-selected" : "course-card"} key={id} onClick={() => toggleSelected(id)}>
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
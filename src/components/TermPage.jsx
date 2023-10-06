import { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from "./CourseList";
import Modal from './Modal';
import CoursePlanButton from "./CoursePlanButton";
import CoursePlan from './CoursePlan';

const terms = {
    Fall: 'Fall Courses',
    Winter: 'Winter Courses',
    Spring: 'Spring Courses'
};

const TermPage = ({courses}) => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCourses, setSelectedCourses] = useState([]);

    return (
        <>
            <div className='d-flex'>
                <TermSelector terms={terms} selection={selection} setSelection={setSelection} />
                <CoursePlanButton openModal={() => setModalOpen(true)}/>
            </div>
            <Modal children={<CoursePlan selected={selectedCourses}/>} open={modalOpen} close={() => setModalOpen(false)}/>
            <CourseList courses={courses} selection={selection} selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses}/>
        </>
    )
}

export default TermPage;
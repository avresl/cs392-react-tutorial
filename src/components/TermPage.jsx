import { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from "./CourseList";

const terms = {
    Fall: 'Fall Courses',
    Winter: 'Winter Courses',
    Spring: 'Spring Courses'
};

const TermPage = ({courses}) => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);

    return (
        <>
            <TermSelector terms={terms} selection={selection} setSelection={setSelection} />
            <CourseList courses={courses} selection={selection}/>
        </>
    )
}

export default TermPage;
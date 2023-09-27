const CourseList = ({courses}) => (
        <div>
            { Object.values(courses).map(id => (
                <div key={id}>
                    {id.term} {id.number}: {id.title}
                </div>
            ))}
        </div>
);

export default CourseList;
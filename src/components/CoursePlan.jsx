const CoursePlan = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <h2>No courses selected. Click on a course card to select it.</h2>
      : selected.map(course => (
          <div key={[course.term,course.number].join('-')}>
            {course.term} CS {course.number} – {course.meets}
          </div>
        ))
    }
  </div>
);

export default CoursePlan;
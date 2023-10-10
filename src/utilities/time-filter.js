const meets = (course) => course.meets.length > 0;

const inSameTerm = (selectedCourses, course) => (
    selectedCourses.filter((selectedCourse) => selectedCourse.term === course.term)
);

const hasCommonDay = (selectedCourses, course) => {
    let days = ['M','Tu','W','Th','F'];
    days = days.filter(day => (course.meets.search(day) >= 0));
    return selectedCourses.filter(
        selectedCourse => (days.reduce(
            (dayOverlap, day) => (selectedCourse.meets.search(day) >= 0) || dayOverlap, false
        ))
    );
}

const getTimeslot = (course) => (
    course.meets.substring(course.meets.search(' ')+1, course.meets.length)
)

const getTimeslots = (courses) => (
    courses.map(
        (course) => (
            getTimeslot(course)
        )
    )
)

const doTimeslotsOverlap = (ts1, ts2) => {
    const t1 = ts1.split('-');
    const t1m0 = t1[0].split(':')[0]*60 + t1[0].split(':')[1];
    const t1m1 = t1[1].split(':')[0]*60 + t1[1].split(':')[1];
    const t2 = ts2.split('-');
    const t2m0 = t2[0].split(':')[0]*60 + t2[0].split(':')[1];
    const t2m1 = t2[1].split(':')[0]*60 + t2[1].split(':')[1];
    return !(t1m0 > t2m1 || t2m0 > t1m1);
}

const hasTimeOverlap = (selectedCourses, course) => {
    const timeslot = getTimeslot(course);
    const timeslots = getTimeslots(selectedCourses);
    return timeslots.filter((selectedTimeslot) => (
        doTimeslotsOverlap(timeslot, selectedTimeslot)
    )).length > 0;
}

export const isConflicting = (selectedCourses, course) => (
    selectedCourses.length > 0 &&
    meets(course) &&
    hasTimeOverlap(
        hasCommonDay(
            inSameTerm(selectedCourses, course), course
        ), course
    )
);
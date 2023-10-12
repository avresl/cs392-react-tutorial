import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const InputField = ({name, text, state, change}) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{text}</label>
      <input className="form-control" id={name} name={name} 
        defaultValue={state} onChange={change} />
      <div className="invalid-feedback">{''}</div>
    </div>
);

const ButtonBar = ({message, disabled}) => {
    const navigate = useNavigate();
    return (
      <div className="d-flex">
        <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
        <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
        <span className="p-2">{message}</span>
      </div>
    );
};

const EditPage = ({courses}) => {
    const params = useParams().id.split('-');
    const course = Object.values(courses).filter((i) => (i.term === params[0] && i.number === params[1]))[0];
    const [title, setTitle] = useState(course.title);
    const [meets, setMeets] = useState(course.meets);

    return (
        <form onSubmit={() => {}} noValidate>
            <InputField name="title" text="Course Title" state={title} change={setTitle} />
            <InputField name="meets" text="Course Meets" state={meets} change={setMeets} />
            <ButtonBar message={''} />
        </form>
    )

}

export default EditPage;
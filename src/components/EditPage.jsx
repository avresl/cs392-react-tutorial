import { useNavigate, useParams } from "react-router-dom";
import { useDbUpdate } from '../utilities/firebase';
import { useFormData } from "../utilities/useFormData";
import 'bootstrap/dist/css/bootstrap.min.css';


const validateCourseData = (key, val) => {
    switch (key) {
      case 'title':
        return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
      case 'meets':
        return /^((M?(Tu)?W?(Th)?F?){1}\s[01]\d:[0-5]\d-[01]\d:[0-5]\d)?$/.test(val) ? '' : 'must contain days of the week and a time range or be empty, ex: MWF 11:00-11:50';
      default: return '';
    }
  };

const InputField = ({name, text, state, change}) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{text}</label>
      <input className="form-control" id={name} name={name} 
        defaultValue={state.values?.[name]} onChange={change} />
      <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
); // className="invalid-feedback"

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
    const params = useParams().id;
    const [update, result] = useDbUpdate(`/courses/${params}`);
    const course = Object.values(courses).filter((i) => (i.term.substring(0,1) === params.substring(0,1) && i.number === params.substring(1,params.length)))[0];
    // const [title, setTitle] = useState(course.title);
    // const [meets, setMeets] = useState(course.meets);
    const [state, change] = useFormData(validateCourseData, course);
    const submit = (evt) => {
      evt.preventDefault();
      if (!state.errors) {
        update(state.values);
      }
    };

    return (
        <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
            <InputField name="title" text="Course Title" state={state} change={change} />
            <InputField name="meets" text="Course Meets" state={state} change={change} />
            <ButtonBar message={result?.message} />
        </form>
    )

}

export default EditPage;
import { Routes, Route } from "react-router-dom";
import TermPage from "./TermPage";
import EditPage from "./EditPage";

const Dispatcher = ({courses, posts}) => (
  <Routes>
    <Route path="/" element={<TermPage courses={courses} />} />
    <Route path="/:id/edit" element={<EditPage courses={courses} />} />
  </Routes>
);

export default Dispatcher;
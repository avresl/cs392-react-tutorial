import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TermPage from "./TermPage";
import EditPage from "./EditPage";

const Dispatcher = ({courses, posts}) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TermPage courses={courses} />} />
      <Route path="/:id/edit" element={<EditPage courses={courses} />} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;
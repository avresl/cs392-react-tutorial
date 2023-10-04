import Banner from "./components/Banner";
import TermPage from "./components/TermPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useJsonQuery } from "./utilities/fetch";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const schedule = {
//   "title": "CS Courses for 2018-2019",
//   "courses": {
//     "F101" : {
//       "term": "Fall",
//       "number": "101",
//       "meets" : "MWF 11:00-11:50",
//       "title" : "Computer Science: Concepts, Philosophy, and Connections"
//     },
//     "F110" : {
//       "term": "Fall",
//       "number": "110",
//       "meets" : "MWF 10:00-10:50",
//       "title" : "Intro Programming for non-majors"
//     },
//     "S313" : {
//       "term": "Spring",
//       "number": "313",
//       "meets" : "TuTh 15:30-16:50",
//       "title" : "Tangible Interaction Design and Learning"
//     },
//     "S314" : {
//       "term": "Spring",
//       "number": "314",
//       "meets" : "TuTh 9:30-10:50",
//       "title" : "Tech & Human Interaction"
//     }
//   }
// };

const queryClient = new QueryClient();

const Main = () => {
  const [schedule, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading course data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  if (!schedule) return <h1>No CS courses for 2018-2019 found</h1>;

  return (
    <>
      <Banner title={schedule.title}/>
      <TermPage courses={schedule.courses}/>
    </>
  )
}

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Main />
      </div>
    </QueryClientProvider>
  );
};

export default App;

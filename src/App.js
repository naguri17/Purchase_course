import Courses from "./components/courses";
import CourseSummary from "./components/course-summary";

const App = () => {
  return (
    <div className="w-full flex flex-col absolute left-1/2 transform -translate-x-1/2 max-w-6xl py-10 gap-5">
      <Courses />
      <CourseSummary />
    </div>
  );
};

export default App;

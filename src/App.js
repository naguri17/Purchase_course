import Courses from "./components/courses";

const App = () => {
  return (
    <div className="w-full flex flex-col absolute left-1/2 transform -translate-x-1/2 max-w-6xl py-10 gap-5">
      <Courses />
    </div>
  );
};

export default App;

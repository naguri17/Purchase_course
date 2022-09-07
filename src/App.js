import Courses from "./components/courses";
import CourseSummary from "./components/course-summary";
import { useState } from "react";

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const onUpdateSelectedCourse = (course, status) => {
    if (status) {
      if (!selectedCourse.length)
        return setSelectedCourse((pre) => pre.concat(course));
      let isSame = false;
      const findCourse =
        [...selectedCourse].find((el) => el?.id === course?.id) || {};
      if (Object.keys(findCourse).length) {
        isSame = true;
      }

      const updateValue = [...selectedCourse].map((el, index) => {
        if (el?.id === course?.id) {
          return {
            ...course,
          };
        }
        return {
          ...el,
        };
      });

      setSelectedCourse((pre) => {
        if (isSame) return (pre = updateValue);
        return pre.concat(course);
      });
      return;
    }
    const courseNotSelected = [...selectedCourse].filter(
      (el) => el?.id !== course?.id
    );
    setSelectedCourse((pre) => (pre = courseNotSelected));
  };

  return (
    <div className="w-full flex flex-col absolute left-1/2 transform -translate-x-1/2 max-w-6xl py-10 gap-5">
      <Courses handleUpdate={onUpdateSelectedCourse} />
      <CourseSummary selectedCourse={selectedCourse} />
    </div>
  );
};

export default App;

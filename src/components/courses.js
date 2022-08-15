import { COURSES_MOCK } from "../mocks/COURSE_MOCK";
import CourseItem from "./course-item";

const Courses = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      {COURSES_MOCK.map(({ src, name, selectLabel, opt }) => {
        return (
          <CourseItem
            src={src}
            name={name}
            selectLabel={selectLabel}
            opt={opt}
          />
        );
      })}
    </div>
  );
};

export default Courses;

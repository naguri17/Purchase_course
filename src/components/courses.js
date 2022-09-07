import { Fragment } from "react";
import { COURSES_MOCK } from "../mocks/COURSE_MOCK";
import CourseItem from "./course-item";

const Courses = ({ handleUpdate }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      {COURSES_MOCK.map(({ src, name, selectLabel, opt, id }, index) => {
        return (
          <Fragment key={index}>
            <CourseItem
              src={src}
              name={name}
              selectLabel={selectLabel}
              opt={opt.map((el) => ({ ...el, id, nameCourse: name }))}
              handleUpdate={handleUpdate}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Courses;

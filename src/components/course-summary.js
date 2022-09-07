import React, { useMemo } from "react";

const CourseSummary = ({ selectedCourse }) => {
  const inforCourse = useMemo(() => {
    return [...selectedCourse].reduce(
      (pre, current, index) => {
        if (index < selectedCourse.length - 1) {
          pre.name += `${current.nameCourse} + `;
        } else {
          pre.name += `${current.nameCourse}`;
        }
        pre.price += Number(current.price);
        pre.discount += Number(current.price) - Number(current.priceDiscount);
        pre.totalPrice += Number(current.priceDiscount);
        return pre;
      },
      { name: "", price: 0, discount: 0, totalPrice: 0 }
    );
  }, [selectedCourse]);

  return (
    <div className="w-full mt-10 flex gap-x-20">
      <div className="w-2/5 flex flex-col text-left gap-2">
        <p className="text-sm tracking-wider">Packages Include</p>
        <p className="text-xl text-primary">{inforCourse.name}</p>
      </div>
      <div className="w-3/5 flex flex-col -translate-y-5">
        <div className="grid grid-cols-3 text-sm border-b-2 border-dashed pb-10">
          <p>Sub Total</p>
          <p className="-translate-x-10">$ {inforCourse.price}</p>
          <p className="text-primary translate-x-8">-$ {inforCourse.discount}</p>
        </div>
        <div className="flex gap-6 pt-10">
          <h3 className="text-lg font-bold tracking-wide uppercase">
            Total Amount
          </h3>
          <h3 className="text-lg font-bold tracking-wide uppercase text-primary">
            ${inforCourse.totalPrice}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CourseSummary);

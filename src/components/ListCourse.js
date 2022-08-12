import React, { useState } from "react";

const data = [
  {
    name: "JavaScript",
    src: "https://fptcloud.com/wp-content/uploads/2022/01/cong-dung-cua-javascript-1.jpg",
    opt: [
      {
        name: "30 days",
        value: 30,
        price: 319,
        priceDiscount: 229,
        percentDiscount: 28,
      },
      {
        name: "90 days",
        value: 90,
        price: 186,
        priceDiscount: 116,
        percentDiscount: 37,
      },
      {
        name: "180 days",
        value: 180,
        price: 134,
        priceDiscount: 75,
        percentDiscount: 44,
      },
      {
        name: "365 days",
        value: 365,
        price: 106,
        priceDiscount: 56,
        percentDiscount: 49,
      },
    ],
    course: "days",
  },
  {
    name: "ReactJS",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/182px-React-icon.svg.png",
    opt: [
      {
        name: "1 Sessions",
        value: 1,
        price: 799,
        priceDiscount: 499,
        percentDiscount: 38,
      },
      {
        name: "3 Sessions",
        value: 3,
        price: 2099,
        priceDiscount: 1299,
        percentDiscount: 38,
      },
      {
        name: "5 Sessions",
        value: 5,
        price: 3299,
        priceDiscount: 1999,
        percentDiscount: 39,
      },
    ],
    course: "sessions",
  },
  {
    name: "MOCK INTERVIEWS",
    src: "https://i.pinimg.com/originals/f3/65/d5/f365d5f71a68df9d724096a116955e79.png",
    opt: [
      {
        name: "1 Sessions",
        value: 1,
        price: 2099,
        priceDiscount: 1299,
        percentDiscount: 38,
      },
      {
        name: "3 Sessions",
        value: 3,
        price: 2099,
        priceDiscount: 1299,
        percentDiscount: 38,
      },
      {
        name: "3 Sessions",
        value: 3,
        price: 2099,
        priceDiscount: 1299,
        percentDiscount: 38,
      },
    ],
    course: "sessions",
  },
];

const ListCourse = () => {
  const [checkStatus, setCheckStatus] = useState(false);

  const isChecked = () => {
    setCheckStatus(!checkStatus);
  };

  return data.map(({ name, opt, src, course }, index) => (
    <div className="w-full mx-auto mt-10">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[80%] flex gap-5 border-2 py-5">
          <div className="w-[10%] flex items-center justify-center">
            <input
              type="checkbox"
              className="w-5 h-5"
              onClick={() => isChecked()}
            />
          </div>
          <div className="w-[10%] ">
            <img src={src} alt="" className="w-[150px] h-[100px]" />
          </div>
          <div className="w-[30%] flex flex-col justify-center">
            <h2>{name}</h2>
            <p>
              {opt[index].value} {course}
            </p>
            <select className="border-black border-2 rounded-lg">
              {opt.map(({ name }) => {
                return <option value={name}>{name}</option>;
              })}
            </select>
          </div>
          <div className="w-[25%] flex flex-col justify-center items-center">
            <p>${opt[index].priceDiscount}/month</p>
            <small className="text-green-400">
              ({opt[index].percentDiscount}% off)
            </small>
            <small className="line-through text-gray-400">
              ${opt[index].price}/month
            </small>
          </div>
          <div className="w-[25%] flex items-center justify-center">
            <p>-${opt[index].price - opt[index].priceDiscount}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ListCourse;

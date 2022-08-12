import { useCallback, useState } from "react";
import { FiCheck } from "react-icons/fi";

const CourseItem = ({ src, name, selectLabel, opt }) => {
  const [selected, setSelected] = useState(opt[0]);
  const [status, setStatus] = useState(false);

  const handleChange = (event) => {
    const findOtp = opt?.find((item) => item?.name == event?.target?.value);
    setSelected(findOtp);
  };

  const Media = useCallback(() => {
    return (
      <div className="w-full col-span-2 flex flex-row gap-7 items-center">
        <button
          onClick={() => setStatus(!status)}
          type="button"
          className="p-1 rounded-full border-primary flex mr-5 items-center justify-center text-primary h-fit w-fit border"
        >
          {status ? <FiCheck /> : <div className="w-4 h-4" />}
        </button>

        <div className="border-2 border-gray-300 border-dashed rounded-lg p-2">
          <div className="w-32 h-32 relative">
            <img
              src={src}
              className="w-full min-h-full absolute object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <p className="font-black text-lg text-secondary">{name}</p>
          <p>{selected?.description}</p>
          <p className="font-bold text-xs mt-2">{selectLabel}</p>
          <select
            className="outline-none border p-2 rounded-md w-full border-gray-300 font-bold"
            onChange={handleChange}
          >
            {opt?.map(({ name }) => (
              <option key={name} value={name} selected={selected?.name == name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }, [status]);

  const Price = useCallback(() => {
    return (
      <div className="flex flex-col items-center justify-center min-h-full">
        <div className="flex flex-col">
          <p className="text-lg">
            $ {selected?.priceDiscount}
            {selected?.unit ? `/ ${selected?.unit}` : ""}
          </p>
          <p className="text-sm text-primary">
            ( {selected?.percentDiscount}% off )
          </p>
          <p className="text-sm text-gray-400">
            $ {selected?.price}
            {selected?.unit ? `/ ${selected?.unit}` : ""}
          </p>
        </div>
      </div>
    );
  }, [selected]);

  const Discount = useCallback(() => {
    return (
      <div className="text-primary flex items-center justify-center">
        -$ {selected?.value}
      </div>
    );
  }, [selected]);

  return (
    <div className="w-full rounded-lg p-5 border-green-300 border-2 grid grid-cols-4 gap-2">
      <Media />
      <Price />
      <Discount />
    </div>
  );
};

export default CourseItem;

import { useRouter } from "next/router";
import React from "react";

const CheckBox = ({ label, id, type, checked }) => {
  const router = useRouter();
  const checkHandler = () => {
    const newValue = !checked;
    if (newValue) {
      router.query[type + id] = true;
    } else delete router.query[type + id];
    router.pathname === "/"
      ? router.push(router, { query: router.query }, { shallow: true })
      : router.replace(router, {}, { shallow: true });
  };

  return (
    <div className="w-fit">
      <input
        id={id}
        type="checkbox"
        onChange={checkHandler}
        checked={checked}
        value={checked}
        className="hidden"
      />
      <label
        htmlFor={id}
        className="flex items-center gap-2 select-none cursor-pointer"
      >
        <span
          className={`w-3 h-3 rounded-sm ring-2 ring-orange-600 ring-offset-1 block ${
            checked ? "bg-orange-600" : ""
          }`}
        ></span>
        {label}
      </label>
    </div>
  );
};

export default React.memo(CheckBox);

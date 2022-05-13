import { useState } from "react";

const CheckBox = ({ label, id }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-fit">
      <input
        id={id}
        type="checkbox"
        onChange={() => {
          setChecked(!checked);
        }}
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

export default CheckBox;

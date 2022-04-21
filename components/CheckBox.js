const CheckBox = ({ label, id }) => {
  return (
    <div className="w-fit">
      <input id={id} type="checkbox" className="hidden" />
      <label htmlFor={id} className="flex items-center gap-2 select-none cursor-pointer">
        <span className="w-3 h-3 rounded-sm ring-2 ring-orange-600 ring-offset-1 block"></span>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
